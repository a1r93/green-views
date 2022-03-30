import styled from 'styled-components';

import { TPaletteColors } from '../../../styles/types';

interface IButtonContainerProps {
    color: TPaletteColors;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${({ color, theme }) => theme.palette[color][500]};
    padding: ${({ theme }) => theme.spacing([1, 2])};
    border-radius: 4px;
    border: none;
    cursor: pointer;

    & > span {
        color: ${({ theme }) => theme.palette.white};
    }
`;
