import { IContactBody } from './types';

const validateEmail = (email: string) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validatePhone = (phone: string) => {
    const re = /^\+?[0-9]{10,15}$/;
    return re.test(String(phone));
};

interface IValidationOptions {
    email?: boolean;
    phone?: boolean;
}

const validateString = (key: string, value: string, options: IValidationOptions = {}) => {
    const errors: string[] = [];

    if (!value) {
        errors.push(`The ${key} parameter is required`);
    }

    if (typeof value !== 'string') {
        errors.push(`The ${key} parameter must be a string`);
    }

    if (options?.email && !validateEmail(value)) {
        errors.push(`The ${key} parameter must be a valid email`);
    }

    if (options?.phone && !validatePhone(value)) {
        errors.push(`The ${key} parameter must be a valid phone number`);
    }

    return errors;
};

export const validateContactBody = (body: IContactBody) => [
    ...validateString('name', body.name),
    ...validateString('email', body.email, { email: true }),
    ...validateString('phone', body.phone, { phone: true }),
    ...validateString('question', body.question),
];
