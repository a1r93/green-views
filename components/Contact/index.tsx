import Button from '../atoms/Button';
import { Row } from '../atoms/layout';
import TextField from '../atoms/TextField';
import { Body1, Heading2 } from '../atoms/typography';
import { ContactContainer, ContactWrapper } from './style';

const Contact = () => (
    <ContactContainer justify="space-evenly" align="center" padding={[8, 3]}>
        <ContactWrapper justify="center">
            <Heading2>Contactez-nous dès maintenant !</Heading2>
            <Body1>
                Vous n’êtes pas encore convaincu ? Ou vous souhaitez recevoir un devis ? Contactez-nous sans plus
                attendre en utilisant le formulaire ci-dessous
            </Body1>
            <TextField placeholder="Nom" />
            <TextField placeholder="Adresse mail" />
            <TextField placeholder="Numéro de téléphone" />
            <TextField multiline placeholder="Posez ici votre question" />
            <Row justify="center" span={0} margin={[4, 0, 0]}>
                <Button>Envoyer</Button>
            </Row>
        </ContactWrapper>
    </ContactContainer>
);

export default Contact;
