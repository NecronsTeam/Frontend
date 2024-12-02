import React, { useContext, useRef } from 'react';
import styles from './LoginForm.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import useTextFormField, { TextField } from '../../../../hooks/useTextFormField';
import useForm from '../../../../hooks/useForm';
import AuthService from '../../../../services/AuthService';
import { emailValidator } from '../../../../validation/validators/email';
import { minLength } from '../../../../validation/validators/minLength';
import { IRegistrationFormData } from '../../registartion_form/components/RegistrationForm';
import ValidableTextInput from '../../../ui/validable_input/ValidableInput';
import Store from '../../../../store/store';
import { StoreContext } from '../../../../main';

export interface ILoginFormData {
  email: string,
  password: string
}

const LoginForm = () => {
  const email = useTextFormField("email", [emailValidator()]);
  const password = useTextFormField("password", [minLength(8)]);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { store } = useContext(StoreContext);

  const form = useForm<TextField, string>({
    fields: [password],
    apiCall: async () => {
      const formData = Object.fromEntries(new FormData(formRef.current ?? undefined)) as any as ILoginFormData;
      const response = await AuthService.login(formData);
      return response.data;
    },
    onSucces: (response) => {
      store.setToken(response)
      navigate('/');
    }
  });

  return (
    <form method='POST' className={styles.form} onSubmit={form.handleFormSubmit} ref={formRef}>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>
          Вход
        </div>
        <div className={styles.formFields}>
          <label className={styles.formField}>
            <div className={styles.formFieldTitle}>
              Email
            </div>
            <div className={styles.formFieldInput}>
              <ValidableTextInput type="text"
                field={email}
                name='email'
                placeholder='Email'
                className={`${styles.email} ${styles.input}`}
              >
                <div className={`${styles.inputIcon} ${styles.inputIconEmail}`}></div>
              </ValidableTextInput>
            </div>
          </label>
          <label className={styles.formField}>
            <div className={styles.formFieldTitle}>
              Пароль
            </div>
            <div className={styles.formFieldInput}>
              <ValidableTextInput type="password"
                field={password}
                name='password'
                placeholder='Пароль'
                className={`${styles.password} ${styles.input}`}
              >
                <div className={`${styles.inputIcon} ${styles.inputIconPassword}`}></div>
              </ValidableTextInput>
            </div>
          </label>
        </div>
        <div className={styles.forgotPassword}>
          <p>
            Забыли пароль?
          </p>
        </div>
        <button type='submit' className={styles.submitBtn}>
          Войти
        </button>
        <div className={styles.notHasAccount}>
          <p>
            Нет аккаунта? <Link to={'/registration'}>Зарегистрироваться</Link>
          </p>
        </div>
      </div>
      <div className={styles.sendingError}>
        {form.sendingError}
      </div>
    </form>
  );
};

export default LoginForm;