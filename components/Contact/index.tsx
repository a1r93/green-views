import { useTranslation } from 'next-i18next';
import { ChangeEvent, useState } from 'react';
import { object, string } from 'yup';

import Ids from '../../constants/ids';
import Button from '../atoms/Button';
import { Row } from '../atoms/layout';
import Teeth from '../atoms/Teeth';
import TextField from '../atoms/TextField';
import { Heading2 } from '../atoms/typography';
import {
    ContactContainer, ContactTeetContainer, ContactWrapper, Description, ErrorMessage
} from './style';
import { YupError } from './types';

interface IForm {
    name: string;
    email: string;
    phone: string;
    question: string;
}

const Contact = () => {
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
        name: string().required(t('name-error')),
        email: string().email(t('email-invalid')).required(t('email-error')),
        phone: string()
            .required(t('phone-error'))
            .matches(/^\+?[0-9]{8,15}$/, t('phone-invalid')),
        question: string().required(t('question-error')),
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
        setIsSubmitting(true);
        const isFormValid = await validateValues();
        if (!isFormValid) return;

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        }).then(res => {
            if (res.status === 200) {
                setIsSubmitting(false);
            } else {
                setHasSubmitError(true);
            }
        });
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const nextValues = { ...values, [name]: value };
        setValues(nextValues);
        setErrors({ ...errors, [name]: undefined });
    };

    return (
        <ContactTeetContainer>
            <Teeth />
            <ContactContainer justify="space-evenly" align="center" padding={[8, 3]} id={Ids.CONTACT}>
                <ContactWrapper justify="center">
                    <Heading2>{t('contact-us')}</Heading2>
                    <Description>{t('contact-us-desc')}</Description>
                    <TextField
                        placeholder={t('name')}
                        name="name"
                        onChange={onInputChange}
                        value={values.name}
                        isError={!!errors.name}
                    />
                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                    <TextField
                        placeholder={t('mail')}
                        name="email"
                        onChange={onInputChange}
                        value={values.email}
                        isError={!!errors.email}
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    <TextField
                        placeholder={t('phone')}
                        name="phone"
                        onChange={onInputChange}
                        value={values.phone}
                        isError={!!errors.phone}
                    />
                    {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                    <TextField
                        multiline
                        placeholder={t('question')}
                        name="question"
                        onChange={onInputChange}
                        value={values.question}
                        isError={!!errors.question}
                    />
                    {errors.question && <ErrorMessage>{errors.question}</ErrorMessage>}
                    {hasSubmitError && <ErrorMessage>{t('submit-error')}</ErrorMessage>}
                    <Row justify="center" span={0} margin={[4, 0, 0]}>
                        <Button onClick={handleSubmit} isLoading={isSubmitting}>
                            {t('send')}
                        </Button>
                    </Row>
                </ContactWrapper>
            </ContactContainer>
            <Teeth reverse />
        </ContactTeetContainer>
    );
};

export default Contact;
