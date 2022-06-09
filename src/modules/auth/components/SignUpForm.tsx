import { ISignupParams } from '../../../models/auth';
import { ILocationParams } from '../../../models/auth';
import { useState, useCallback } from 'react';

interface Props {
    onSignup(values: ISignupParams): void;
    loading: boolean;
    errorMessage: string;
    locations: Array<ILocationParams>;
}

const SignUpForm = (props: Props) => {
    const { onSignup, loading, errorMessage, locations } = props;
    const [formValues, setFormValues] = useState<ISignupParams>({
        email: '', 
        password: '', 
        repeatPassword: '',
        name: '',
        gender: '',
        region: '',
        state: '',
    });
    const [validate, setValidate] = useState<ISignupParams>();
    const onSubmit = useCallback(() => {
        // const validate = validateSignUp(formValues);
    }, [formValues, onSignup]);
    const renderGender = () => {

    };
    const renderState = () => {

    };
    const renderRegion = () => {

    };

    // return (
    //     <form 
    //         noValidate
    //         autoComplete='off'
    //         style = {{ maxWidth: '550px', width: '100%'}}
    //         onSubmit = {e => {
    //             e.preventDefault();
    //             onSubmit();
    //         }}
    //         className = "row g-3 needs-validation"
    //     >
    //         {!!errorMessage && (<div className="alert alert-danger" style = {{width: '100%'}} role = "alert">
    //            {errorMessage}
    //         </div>)}

    //         <div></div>
    //     </form>
    // );
};

export default SignUpForm;