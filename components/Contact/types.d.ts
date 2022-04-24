// Generated by https://quicktype.io

export interface YupError {
    value: Value;
    errors: string[];
    inner: Inner[];
    name: string;
    message: string;
}

export interface Inner {
    value: string;
    path: string;
    type: string;
    errors: string[];
    params: Params;
    inner: any[];
    name: string;
    message: string;
}

export interface Params {
    value: string;
    originalValue: string;
    path: string;
    regex?: Regex;
}

export interface Regex {}

export interface Value {
    name: string;
    email: string;
    phone: string;
    question: string;
}