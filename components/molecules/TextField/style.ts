import styled, { css } from 'styled-components';

const inputStyle = css<{ isError?: boolean }>`
    width: 100%;
    font-family: 'Lato-regular', 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 1.125rem;
    line-height: 1.4em;
    margin: 0;
    padding: ${({ theme }) => theme.spacing([1])};
    background-color: ${({ theme }) => theme.palette.secondary[50]};
    color: ${({ theme, isError }) => (isError ? theme.palette.error[500] : theme.palette.primary[900])};
    border: none;
    border-radius: 4px;
    margin: ${({ theme }) => theme.spacing([1, 0])};

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        font-size: 1rem;
    }

    &::placeholder {
        color: ${({ theme, isError }) => (isError ? theme.palette.error[300] : theme.palette.primary[300])};
        opacity: 1;
    }

    &:focus {
        outline: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
`;

export const TextFieldInput = styled.input`
    ${inputStyle}
`;

export const TextArea = styled.textarea`
    ${inputStyle}
`;
