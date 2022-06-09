import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ILoginParams, ILoginValidation } from '../../../models/auth';
import { validateLogin, validLogin } from '../ultis';

interface Props {
  onLogin(values: ILoginParams): void;
  loading: boolean;
  errorMessage: string;
}

const LoginForm = (props: Props) => {
  const { onLogin, loading, errorMessage } = props;

  const [formValues, setFormValues] = React.useState<ILoginParams>({ email: '', password: '', rememberMe: false });
  const [validate, setValidate] = React.useState<ILoginValidation>();

  const onSubmit = React.useCallback(() => {
    const validate = validateLogin(formValues);

    setValidate(validate);

    if (!validLogin(validate)) {
      return;
    }

    onLogin(formValues);
  }, [formValues, onLogin]);

  return (
    <form
      style = {{ maxWidth : '550px', width: '100%'}}
      onSubmit = {e => {
        e.preventDefault(); 
        onSubmit();
      }}
      className = 'row g-3 needs-validation'
    >
      {!!errorMessage && (
        <div className = 'alert alert-danger' role = 'alert' style = {{ width: '100%'}}>
          {errorMessage}
        </div>
      )}

      {/* Email Input */}
      <div className = "col-md-12">
        <label htmlFor = "inputEmail" className = "form-label">
          <FormattedMessage id = 'email'/>
        </label>
        <input value = {formValues.email} onChange = {e => setFormValues({...formValues, email: e.target.value})} type = "text" className = "form-control" id = "inputEmail" />
            {!!validate?.email && (
              <small className = 'text-danger'>
                <FormattedMessage id = {validate?.email} />
              </small>
            )}
      </div>
      
      {/* Password Input */}
      <div className = "col-md-12">
        <label htmlFor = "inputPassword" className = "form-label">
          <FormattedMessage id = 'password'/>
        </label>
        <input 
          type = "password" 
          placeholder = '4 more characters'
          className = "form-control" 
          id = "inputPassword" 
          value = {formValues.password} 
          onChange = {e => setFormValues({ ...formValues, password: e.target.value })}
        />
        {!!validate?.password && (
          <small className = 'text-danger'>
            <FormattedMessage id = { validate?.password }/>
          </small>
        )}
      </div>

      {/* Remember Me checkbox */}
      <div className = "col-12">
        <div className = 'form-check'>
          <input type = 'checkbox' className = 'form-check-input' id = 'invalidCheck' value = ''/>
          <label htmlFor="invalidCheck" className = "form-check-label">
            <FormattedMessage id = 'rememberMe'/>
          </label>
        </div>
      </div>

      {/* Button Log in  */}
      <div className = "row justify-content-md-center" style = {{ margin: '16px 0' }}>
        <div className = "col-md-auto">
          <button
            className = "btn btn-primary"
            type = "submit"
            style = {{ minWidth: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
          >
            <FormattedMessage id = 'login'/>
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
