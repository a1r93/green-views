import { useTranslation } from 'next-i18next';

import Ids from '../../constants/ids';
import Button from '../atoms/Button';
import { Row } from '../atoms/layout';
import Teeth from '../atoms/Teeth';
import TextField from '../atoms/TextField';
import { Body1, Heading2 } from '../atoms/typography';
import { ContactContainer, ContactTeetContainer, ContactWrapper } from './style';

const Contact = () => {
    const { t } = useTranslation('contact');

    return (
        <ContactTeetContainer>
            <Teeth />
            <ContactContainer justify="space-evenly" align="center" padding={[8, 3]} id={Ids.CONTACT}>
                <ContactWrapper justify="center">
                    <Heading2>{t('contact-us')}</Heading2>
                    <Body1>{t('contact-us-desc')}</Body1>
                    <TextField placeholder={t('name')} />
                    <TextField placeholder={t('mail')} />
                    <TextField placeholder={t('phone')} />
                    <TextField multiline placeholder={t('question')} />
                    <Row justify="center" span={0} margin={[4, 0, 0]}>
                        <Button>{t('send')}</Button>
                    </Row>
                </ContactWrapper>
            </ContactContainer>
            <Teeth reverse />
        </ContactTeetContainer>
    );
};

export default Contact;
