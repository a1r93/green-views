import styled, { keyframes } from 'styled-components';

import { TPaletteColors } from '../../../styles/types';

interface IButtonContainerProps {
    color: TPaletteColors;
    isLoading: boolean;
}

const loadingKf = keyframes`
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
`;

export const ButtonContainer = styled.button<IButtonContainerProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ color, theme }) => theme.palette[color][500]};
    padding: ${({ theme }) => theme.spacing([1, 2])};
    border-radius: 4px;
    border: none;
    cursor: pointer;
    position: relative;
    transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
        background-color: ${({ color, theme }) => theme.palette[color][300]};
        transform: scale(1.05);
    }

    & > span {
        color: ${({ theme, isLoading }) => (isLoading ? 'transparent' : theme.palette.white)};
    }

    &:after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 4px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: ${loadingKf} 1s ease ${({ isLoading }) => (isLoading ? 'infinite' : '')};
        opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
    }
`;
