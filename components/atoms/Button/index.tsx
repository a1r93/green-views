import { TPaletteColors } from '../../../styles/types';
import { Body1 } from '../typography';
import { ButtonContainer } from './style';

interface IButtonProps {
    color?: TPaletteColors;
    children: string;
}

const Button = ({ color = 'primary', children }: IButtonProps) => (
    <ButtonContainer color={color}>
        <Body1>{children}</Body1>
    </ButtonContainer>
);

export default Button;
