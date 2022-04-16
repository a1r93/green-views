import { useEffect, useState } from 'react';

import Ids from '../../constants/ids';
import { useResizeListener } from '../../hooks';
import {
    HEADER_SIZE, HEADER_SIZE_SMALL, HeaderContainer, Logo, Navigation, NavigationLink,
    StyledBurgerIcon
} from './style';

const Header = () => {
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
                        Services
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink
                        href={`#${Ids.DESCRIPTION}`}
                        onClick={() => navigateTo(Ids.DESCRIPTION)}
                        shouldDisplayShadow={shouldDisplayShadow}
                    >
                        Description
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink
                        href={`#${Ids.GALLERY}`}
                        onClick={() => navigateTo(Ids.GALLERY)}
                        shouldDisplayShadow={shouldDisplayShadow}
                    >
                        Gallerie
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink
                        href={`#${Ids.CONTACT}`}
                        onClick={() => navigateTo(Ids.CONTACT)}
                        shouldDisplayShadow={shouldDisplayShadow}
                    >
                        Contact
                    </NavigationLink>
                </li>
            </Navigation>
            <StyledBurgerIcon id="burger-menu" shouldDisplayShadow={shouldDisplayShadow} />
        </HeaderContainer>
    );
};

export default Header;
