import { TPaletteColors } from '../../../styles/types';
import { Body1 } from '../typography';
import { ButtonContainer } from './style';

interface IButtonProps {
    color?: TPaletteColors;
    children: string;
    onClick: () => void;
}

const Button = ({ color = 'primary', children, onClick }: IButtonProps) => (
    <ButtonContainer color={color} onClick={onClick}>
        <Body1>{children}</Body1>
    </ButtonContainer>
);

export default Button;
