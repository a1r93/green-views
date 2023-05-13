import { useTranslation } from 'next-i18next';
import { ChangeEvent, useState } from 'react';
import { object, string } from 'yup';

import { IForm, YupError } from './types';

const phoneRegex = /^\+?[0-9]{8,15}$/;

const sendMessage = (values: IForm) =>
    new Promise(resolve => {
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        }).then(res => {
            if (res.status === 200) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });

const useContactForm = () => {
    const { t } = useTranslation('contact');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [values, setValues] = useState<IForm>({
        name: '',
        email: '',
        phone: '',
        question: '',
    });
    const [errors, setErrors] = useState<Partial<IForm>>({});
    const [hasSubmitError, setHasSubmitError] = useState(false);

    const validationSchema = object({
        name: string().required(t('name-error') ?? ''),
        email: string()
            .email(t('email-invalid') ?? '')
            .required(t('email-error') ?? ''),
        phone: string()
            .required(t('phone-error') ?? '')
            .matches(phoneRegex, t('phone-invalid') ?? ''),
        question: string().required(t('question-error') ?? ''),
    });

    const validateValues = async () => {
        try {
            await validationSchema.validate(values, { abortEarly: false });
            return true;
        } catch (error) {
            const yupError = error as YupError;
            const validationErrors = yupError.inner.reduce(
                (acc, { path, message }) => ({ ...acc, [path]: message }),
                {},
            );
            setErrors(validationErrors);
            return false;
        }
    };

    const handleSubmit = async () => {
        const isFormValid = await validateValues();
        if (!isFormValid) return;

        setIsSubmitting(true);
        const hasSent = await sendMessage(values);
        setIsSubmitting(false);
        !hasSent && setHasSubmitError(true);
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const nextValues = { ...values, [name]: value };
        setValues(nextValues);
        setErrors({ ...errors, [name]: undefined });
    };

    return {
        isSubmitting,
        values,
        errors,
        hasSubmitError,
        onInputChange,
        handleSubmit,
    };
};

export default useContactForm;
