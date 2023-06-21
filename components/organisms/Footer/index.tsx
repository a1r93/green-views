import { useTranslation } from 'next-i18next';

import { Column, Row } from '../../atoms/layout';
import { Body2, Heading4 } from '../../atoms/typography';
import { FooterContainer, FooterWrapper, SocialLink, StyledFacebook, StyledInstagram } from './style';

const Footer = () => {
    const { t } = useTranslation('footer');

    return (
        <FooterContainer align="center">
            <FooterWrapper justify="space-between">
                <Column>
                    <Heading4>{t('company')}</Heading4>
                    <Body2>Green views SPRL</Body2>
                    <Body2>{t('vat')}: BE0665816116</Body2>
                </Column>
                <Column>
                    <Heading4>{t('address')}</Heading4>
                    <Body2>Rue de béclines 33</Body2>
                    <Body2>1435 Mont-Saint-Guibert</Body2>
                    <Body2>{t('belgium')}</Body2>
                </Column>
                <Column>
                    <Heading4>{t('contact')}</Heading4>
                    <Body2>info@greenviews.be</Body2>
                    <Body2>+32 472 65 50 97</Body2>
                </Column>
                <Column>
                    <Heading4>{t('social-networks')}</Heading4>
                    <SocialLink href="https://www.facebook.com/greenviewssprl">
                        <Row align="center">
                            <StyledFacebook />
                            <Body2>Facebook</Body2>
                        </Row>
                    </SocialLink>
                    <SocialLink href="https://www.instagram.com/greenviewssrl/?hl=fr">
                        <Row align="center">
                            <StyledInstagram />
                            <Body2>Instagram</Body2>
                        </Row>
                    </SocialLink>
                </Column>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
