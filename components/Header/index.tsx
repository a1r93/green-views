import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Ids from '../../constants/ids';
import { useResizeListener } from '../../hooks';
import {
    HEADER_SIZE, HEADER_SIZE_SMALL, HeaderContainer, LanguageSpan, LanguageWrapper, Logo,
    Navigation, NavigationLink, StyledBurgerIcon
} from './style';

const Header = () => {
    const { t, i18n } = useTranslation('header');
    const [shouldDisplayShadow, setShouldDisplayShadow] = useState(false);
    const { width, height } = useResizeListener();

    useEffect(() => {
        const onScroll = (event: Event) => {
            const scrolled = document?.scrollingElement?.scrollTop || 0;

            const mobileHeight = height * 1.2 - HEADER_SIZE_SMALL;
            const webHeight = height * 1.5 - HEADER_SIZE;
            const welcomeHeight = width >= 600 ? webHeight : mobileHeight;

            setShouldDisplayShadow(scrolled > welcomeHeight);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [height, width]);

    const navigateTo = (id: Ids) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };
    const onLanguageClick = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <HeaderContainer justify="space-between" align="center" padding={[2]} shouldDisplayShadow={shouldDisplayShadow}>
            <NavigationLink href={`#${Ids.WELCOME}`} onClick={() => navigateTo(Ids.WELCOME)}>
                <Logo src="/images/green-views-logo.png" />
            </NavigationLink>
            <Navigation>
                <li>
                    <NavigationLink
                        href={`#${Ids.SERVICES}`}
                        onClick={() => navigateTo(Ids.SERVICES)}
                        shouldDisplayShadow={shouldDisplayShadow}
                    >
                        {t('services')}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink
                        href={`#${Ids.DESCRIPTION}`}
                        onClick={() => navigateTo(Ids.DESCRIPTION)}
                        shouldDisplayShadow={shouldDisplayShadow}
                    >
                        {t('description')}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink
                        href={`#${Ids.GALLERY}`}
                        onClick={() => navigateTo(Ids.GALLERY)}
                        shouldDisplayShadow={shouldDisplayShadow}
                    >
                        {t('gallery')}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink
                        href={`#${Ids.CONTACT}`}
                        onClick={() => navigateTo(Ids.CONTACT)}
                        shouldDisplayShadow={shouldDisplayShadow}
                    >
                        {t('contact')}
                    </NavigationLink>
                </li>
            </Navigation>
            <LanguageWrapper span={0} justify="space-between">
                <LanguageSpan
                    shouldDisplayShadow={shouldDisplayShadow}
                    isSelected={i18n.language === 'fr'}
                    onClick={() => onLanguageClick('fr')}
                >
                    FR
                </LanguageSpan>
                <LanguageSpan
                    shouldDisplayShadow={shouldDisplayShadow}
                    isSelected={i18n.language === 'nl'}
                    onClick={() => onLanguageClick('nl')}
                >
                    NL
                </LanguageSpan>
                <LanguageSpan
                    shouldDisplayShadow={shouldDisplayShadow}
                    isSelected={i18n.language === 'en'}
                    onClick={() => onLanguageClick('en')}
                >
                    EN
                </LanguageSpan>
            </LanguageWrapper>
            <StyledBurgerIcon id="burger-menu" shouldDisplayShadow={shouldDisplayShadow} />
        </HeaderContainer>
    );
};

export default Header;
