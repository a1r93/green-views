import { Column } from '../atoms/layout';
import { Body3, Heading4 } from '../atoms/typography';
import { FooterContainer, FooterWrapper } from './style';

const Footer = () => (
    <FooterContainer align="center">
        <FooterWrapper justify="space-between">
            <Column>
                <Heading4>Société</Heading4>
                <Body3>Green views SPRL</Body3>
                <Body3>TVA: BE0665816116</Body3>
            </Column>
            <Column>
                <Heading4>Adresse</Heading4>
                <Body3>Rue de béclines 33</Body3>
                <Body3>1435 Mont-Saint-Guibert</Body3>
                <Body3>Belgique</Body3>
            </Column>
            <Column>
                <Heading4>Contact</Heading4>
                <Body3>greenviews@gmail.com</Body3>
                <Body3>+32 472 65 50 97</Body3>
            </Column>
            <Column>
                <Heading4>Réseaux sociaux</Heading4>
                <Body3>Facebook</Body3>
                <Body3>Instagram</Body3>
            </Column>
        </FooterWrapper>
    </FooterContainer>
);

export default Footer;
