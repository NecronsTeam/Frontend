import React, { useContext, useRef } from 'react';
import styles from './RegistartionForm.module.scss';
import { useNavigate } from 'react-router-dom';
import ValidableInput from '../../../ui/validable_input/ValidableInput';
import useTextFormField, { TextField } from '../../../../hooks/useTextFormField';
import useForm from '../../../../hooks/useForm';
import ValidableTextInput from '../../../ui/validable_input/ValidableInput';
import { minLength } from '../../../../validation/validators/minLength';
import AuthService from '../../../../services/AuthService';
import { emailValidator } from '../../../../validation/validators/email';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../../../main';

export interface IRegistrationFormData {
  email: string,
  password: string,
}

const RegistrationForm = () => {
  const email = useTextFormField("email", [emailValidator()]);
  const password = useTextFormField("password", [minLength(8)]);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { store } = useContext(StoreContext);

  const form = useForm<TextField, string>({
    fields: [password],
    apiCall: async () => {
      const formData = Object.fromEntries(new FormData(formRef.current ?? undefined)) as any as IRegistrationFormData;
      const responseReg = await AuthService.registration(formData);
      const responseLog = await AuthService.login(formData);
      return responseLog.data;
    },
    onSucces: async (response) => {
      store.setToken(response)
      navigate('/');
    }
  })
  return (
    <form method='POST' className={styles.form} onSubmit={form.handleFormSubmit} ref={formRef}>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>
          Регистрация
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
        <div className={styles.info}>
          <p>
            Нажимая кнопку ниже вы соглашаетесь с Пользовательским соглашением
          </p>
        </div>
        <button type='submit' className={styles.submitBtn}>
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
        <div className={styles.hasAccount}>
          <p>
            Уже есть аккаунт? <Link to={'/login'}>Войти</Link>
          </p>
        </div>
      </div>
      <div>
        {form.sendingError}
      </div>
    </form>
  );
};

export default RegistrationForm;