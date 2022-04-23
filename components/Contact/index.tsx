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

    const handleSubmit = () => {
        console.log('Sending');
        let data = {};
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => {
            console.log('Response received');
            if (res.status === 200) {
                console.log('Response succeeded!');
            }
        });
    };

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
                        <Button onClick={handleSubmit}>{t('send')}</Button>
                    </Row>
                </ContactWrapper>
            </ContactContainer>
            <Teeth reverse />
        </ContactTeetContainer>
    );
};

export default Contact;
