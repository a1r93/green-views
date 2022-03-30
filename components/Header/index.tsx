import BurgerIcon from '../atoms/icons/burger';
import { HeaderContainer, Logo, Navigation, NavigationLink, StyledBurgerIcon } from './style';

interface IHeaderProps {
    shouldDisplayShadow?: boolean;
}

const Header = ({ shouldDisplayShadow }: IHeaderProps) => (
    <HeaderContainer justify="space-between" align="center" padding={[2]} shouldDisplayShadow={shouldDisplayShadow}>
        <Logo src="/images/green-views-logo.png" />
        <Navigation>
            <li>
                <NavigationLink href="#">Services</NavigationLink>
            </li>
            <li>
                <NavigationLink href="#">Description</NavigationLink>
            </li>
            <li>
                <NavigationLink href="#">Contact</NavigationLink>
            </li>
            <li>
                <NavigationLink href="#">Gallerie</NavigationLink>
            </li>
        </Navigation>
        <StyledBurgerIcon />
    </HeaderContainer>
);

export default Header;
