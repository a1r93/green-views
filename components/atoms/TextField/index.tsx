import { TextArea, TextFieldInput } from './style';

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
