interface Inner {
    value: string;
    path: string;
    type: string;
    errors: string[];
    params: Params;
    inner: any[];
    name: string;
    message: string;
}

interface Params {
    value: string;
    originalValue: string;
    path: string;
}

export interface YupError {
    value: IForm;
    errors: string[];
    inner: Inner[];
    name: string;
    message: string;
}

export interface IForm {
    name: string;
    email: string;
    phone: string;
    question: string;
}
