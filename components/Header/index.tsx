import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Ids from '../../constants/ids';
import { useResizeListener } from '../../hooks';
import {
    HEADER_SIZE, HEADER_SIZE_SMALL, HeaderContainer, LanguageSpan, LanguageWrapper, Logo,
    Navigation, NavigationLink, StyledBurgerIcon
} from './style';

const Header = () => {
    const { t } = useTranslation('header');
    const [shouldDisplayShadow, setShouldDisplayShadow] = useState(false);
    const { width, height } = useResizeListener();
    const router = useRouter();

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

    const getOffsetById = (id: Ids, defaultOffset: number) => {
        if (id === Ids.DESCRIPTION) return 0;
        if (id === Ids.GALLERY) return defaultOffset + 40;

        return defaultOffset;
    };

    const navigateTo = (id: Ids) => {
        const element = document.getElementById(id);
        if (!element) return;

        const scrollOffset = width >= 600 ? HEADER_SIZE_SMALL : HEADER_SIZE;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - getOffsetById(id, scrollOffset);

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

    return (
        <HeaderContainer justify="space-between" align="center" padding={[2]} shouldDisplayShadow={shouldDisplayShadow}>
            <NavigationLink onClick={() => navigateTo(Ids.WELCOME)}>
                <Logo src="/images/green-views-logo.png" />
            </NavigationLink>
            <Navigation>
                <li>
                    <NavigationLink onClick={() => navigateTo(Ids.SERVICES)} shouldDisplayShadow={shouldDisplayShadow}>
                        {t('services')}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink
                        onClick={() => navigateTo(Ids.DESCRIPTION)}
                        shouldDisplayShadow={shouldDisplayShadow}
                    >
                        {t('description')}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink onClick={() => navigateTo(Ids.GALLERY)} shouldDisplayShadow={shouldDisplayShadow}>
                        {t('gallery')}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink onClick={() => navigateTo(Ids.CONTACT)} shouldDisplayShadow={shouldDisplayShadow}>
                        {t('contact')}
                    </NavigationLink>
                </li>
            </Navigation>
            <LanguageWrapper span={0} justify="space-between">
                <Link href="/" locale="fr">
                    <LanguageSpan shouldDisplayShadow={shouldDisplayShadow} isSelected={router.locale === 'fr'}>
                        FR
                    </LanguageSpan>
                </Link>
                <Link href="/" locale="nl">
                    <LanguageSpan shouldDisplayShadow={shouldDisplayShadow} isSelected={router.locale === 'nl'}>
                        NL
                    </LanguageSpan>
                </Link>
                <Link href="/" locale="en">
                    <LanguageSpan shouldDisplayShadow={shouldDisplayShadow} isSelected={router.locale === 'en'}>
                        EN
                    </LanguageSpan>
                </Link>
            </LanguageWrapper>
            <StyledBurgerIcon id="burger-menu" shouldDisplayShadow={shouldDisplayShadow} />
        </HeaderContainer>
    );
};

export default Header;
