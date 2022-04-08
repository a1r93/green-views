import styled, { css } from 'styled-components';

const TextFieldContainer = styled.div`
    display: inline-flex;
    width: 100%;
`;

const inputStyle = css`
    width: 100%;
    font-family: 'Lato-regular', 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 1.125rem;
    line-height: 1.4em;
    margin: 0;
    padding: ${({ theme }) => theme.spacing([1])};
    background-color: ${({ theme }) => theme.palette.secondary[50]};
    color: ${({ theme }) => theme.palette.primary[900]};
    border: none;
    border-radius: 4px;
    margin: ${({ theme }) => theme.spacing([1, 0])};

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        font-size: 1rem;
    }

    &::placeholder {
        color: ${({ theme }) => theme.palette.primary[300]};
        opacity: 1;
    }

    &:focus {
        outline: none;
    }
`;

const TextFieldInput = styled.input`
    ${inputStyle}
`;

const TextArea = styled.textarea`
    ${inputStyle}
`;

interface ITextFieldProps {
    multiline?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextField = ({ placeholder, value, onChange, multiline = false }: ITextFieldProps) =>
    multiline ? (
        <TextArea rows={4} placeholder={placeholder} value={value} onChange={onChange} />
    ) : (
        <TextFieldInput type="text" placeholder={placeholder} value={value} onChange={onChange} />
    );

export default TextField;
