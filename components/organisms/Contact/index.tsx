import { useTranslation } from 'next-i18next';

import Ids from '../../../constants/ids';
import { Row } from '../../atoms/layout';
import { Heading2 } from '../../atoms/typography';
import Button from '../../molecules/Button';
import Teeth from '../../molecules/Teeth';
import TextField from '../../molecules/TextField';
import {
    ContactContainer, ContactTeetContainer, ContactWrapper, Description, ErrorMessage
} from './style';
import useContactForm from './useContactForm';

const Contact = () => {
    const { t } = useTranslation('contact');
    const form = useContactForm();

    return (
        <ContactTeetContainer>
            <Teeth />
            <ContactContainer justify="space-evenly" align="center" padding={[8, 3]} id={Ids.CONTACT}>
                <ContactWrapper justify="center">
                    <Heading2>{t('contact-us')}</Heading2>
                    <Description>{t('contact-us-desc')}</Description>
                    <TextField
                        placeholder={t('name') ?? ''}
                        name="name"
                        onChange={form.onInputChange}
                        value={form.values.name}
                        isError={!!form.errors.name}
                    />
                    {form.errors.name && <ErrorMessage>{form.errors.name}</ErrorMessage>}
                    <TextField
                        placeholder={t('mail') ?? ''}
                        name="email"
                        onChange={form.onInputChange}
                        value={form.values.email}
                        isError={!!form.errors.email}
                    />
                    {form.errors.email && <ErrorMessage>{form.errors.email}</ErrorMessage>}
                    <TextField
                        placeholder={t('phone') ?? ''}
                        name="phone"
                        onChange={form.onInputChange}
                        value={form.values.phone}
                        isError={!!form.errors.phone}
                    />
                    {form.errors.phone && <ErrorMessage>{form.errors.phone}</ErrorMessage>}
                    <TextField
                        multiline
                        placeholder={t('question') ?? ''}
                        name="question"
                        onChange={form.onInputChange}
                        value={form.values.question}
                        isError={!!form.errors.question}
                    />
                    {form.errors.question && <ErrorMessage>{form.errors.question}</ErrorMessage>}
                    {form.hasSubmitError && <ErrorMessage>{t('submit-error')}</ErrorMessage>}
                    <Row justify="center" span={0} margin={[4, 0, 0]}>
                        <Button onClick={form.handleSubmit} isLoading={form.isSubmitting}>
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
