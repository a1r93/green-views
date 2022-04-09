import { TextArea, TextFieldInput } from './style';

interface ITextFieldProps {
    multiline?: boolean;
    placeholder?: string;
    value?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextField = ({ placeholder, value, onChange, multiline = false, name }: ITextFieldProps) =>
    multiline ? (
        <TextArea rows={4} placeholder={placeholder} value={value} onChange={onChange} name={name} />
    ) : (
        <TextFieldInput type="text" placeholder={placeholder} value={value} onChange={onChange} name={name} />
    );

export default TextField;
