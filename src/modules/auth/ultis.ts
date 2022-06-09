import {ILoginParams, ILoginValidation} from '../../models/auth';
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



export const validateLogin = (values: ILoginParams): ILoginValidation => {
    return {
        email: validateEmail(values.email),
        password: validatePassword(values.password)
    };
};

export const validLogin = (values: ILoginValidation) => {
    return (!values.email && !values.password);
};