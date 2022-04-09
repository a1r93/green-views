import Ids from '../../constants/ids';
import { HeaderContainer, Logo, Navigation, NavigationLink, StyledBurgerIcon } from './style';

interface IHeaderProps {
    shouldDisplayShadow?: boolean;
}

const Header = ({ shouldDisplayShadow }: IHeaderProps) => {
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
                    <NavigationLink href={`#${Ids.SERVICES}`} onClick={() => navigateTo(Ids.SERVICES)}>
                        Services
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink href={`#${Ids.DESCRIPTION}`} onClick={() => navigateTo(Ids.DESCRIPTION)}>
                        Description
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink href={`#${Ids.CONTACT}`} onClick={() => navigateTo(Ids.CONTACT)}>
                        Contact
                    </NavigationLink>
                </li>
                <li>
                    <NavigationLink href={`#${Ids.SERVICES}`} onClick={() => navigateTo(Ids.SERVICES)}>
                        Gallerie
                    </NavigationLink>
                </li>
            </Navigation>
            <StyledBurgerIcon id="burger-menu" />
        </HeaderContainer>
    );
};

export default Header;
