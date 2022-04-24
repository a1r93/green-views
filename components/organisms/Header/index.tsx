import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Ids from '../../../constants/ids';
import { useResizeListener } from '../../../hooks';
import useScrollTo from '../../../hooks/useScrollTo';
import {
    HEADER_SIZE, HEADER_SIZE_SMALL, HeaderContainer, LanguageSpan, LanguageWrapper, Logo,
    Navigation, NavigationLink, StyledMenuIcon
} from './style';

const Header = () => {
    const { t } = useTranslation('header');
    const [shouldDisplayShadow, setShouldDisplayShadow] = useState(false);
    const { width, height } = useResizeListener();
    const router = useRouter();
    const scrollTo = useScrollTo();

    useEffect(() => {
        const onScroll = () => {
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

    return (
        <HeaderContainer justify="space-between" align="center" padding={[2]} shouldDisplayShadow={shouldDisplayShadow}>
            <NavigationLink onClick={() => scrollTo(Ids.WELCOME)}>
                <Logo src="/images/green-views-logo.png" />
            </NavigationLink>
            <Navigation>
                <li>
                    <NavigationLink onClick={() => scrollTo(Ids.SERVICES)} shouldDisplayShadow={shouldDisplayShadow}>
                        {t('services')}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink onClick={() => scrollTo(Ids.DESCRIPTION)} shouldDisplayShadow={shouldDisplayShadow}>
                        {t('description')}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink onClick={() => scrollTo(Ids.GALLERY)} shouldDisplayShadow={shouldDisplayShadow}>
                        {t('gallery')}
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink onClick={() => scrollTo(Ids.CONTACT)} shouldDisplayShadow={shouldDisplayShadow}>
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
            <StyledMenuIcon id="menu" shouldDisplayShadow={shouldDisplayShadow} />
        </HeaderContainer>
    );
};

export default Header;
