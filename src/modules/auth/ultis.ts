import {ILoginParams, ILoginValidation, ISignupParams, ISignupValidation} from '../../models/auth';
import {validEmailRegex} from '../../utils';

//Validate email:
const validateEmail = (email: string) => {
    if(!email) {
        return 'Email Requires';
    }

    if(!validEmailRegex) {
        return 'Email Invalid';
    }
    return '';
};

//Validate password:
const validatePassword = (password: string) => {
    if(!password) {
        return 'Password Requires';
    }

    if(password.length < 4) {
        return 'Min Password Invalid';
    }
    return '';
};

//Validate repeate password:
const validateRepeatPassword = (password: string, repeatPassword: string) => {
    if(!repeatPassword) {
        return 'Repeat Password Requires';
    }
    if(password !== repeatPassword) {
        return 'Password not match';
    }
    return '';
};

//Validate Field:
const validateField = (field: string, value: string) => {
    if(value) return '';
    let fieldRequire = '';
    switch(field) {
        case 'name':
            fieldRequire = 'nameRequire'
            break;
        case 'render':
            fieldRequire = 'genderRequire'
            break;
        case 'region':
            fieldRequire = 'regionRequire'
            break;
        case 'state':
            fieldRequire = 'stateRequire'
            break;
    }
    return fieldRequire;

};

export const validateLogin = (values: ILoginParams): ILoginValidation => {
    return {
        email: validateEmail(values.email),
        password: validatePassword(values.password)
    };
};

export const validateSignUp = (values: ISignupParams): ISignupValidation => {
    return {
        email: validateEmail(values.email),
        password: validatePassword(values.password),
        repeatPassword: validateRepeatPassword(values.password, values.repeatPassword),
        name: (values.name),
        gender: (values.gender), 
        region: (values.region),
        state: (values.state)
    };
};

export const validLogin = (values: ILoginValidation) => {
    return (!values.email && !values.password);
};

export const validSignUp = (values: ISignupValidation) => {
    return (!values.email && !values.password);
};