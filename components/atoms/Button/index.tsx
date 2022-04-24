import { TPaletteColors } from '../../../styles/types';
import { Body1 } from '../typography';
import { ButtonContainer } from './style';

interface IButtonProps {
    color?: TPaletteColors;
    children: string;
    onClick: () => void;
    isLoading?: boolean;
}

const Button = ({ color = 'primary', children, onClick, isLoading = false }: IButtonProps) => (
    <ButtonContainer type="button" color={color} onClick={onClick} isLoading={isLoading}>
        <Body1>{children}</Body1>
    </ButtonContainer>
);

export default Button;
