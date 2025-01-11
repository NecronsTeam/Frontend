import React, { useContext, useRef, useState } from 'react';
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
import RadioButton from '../../../ui/radio_button/RadioButton';
import { UserRole } from '../../../../types/UserRole';
import { RadioGroup, Radio } from 'react-radio-group'

export interface IRegistrationFormData {
  email: string,
  password: string,
  role: UserRole
}

const RegistrationForm = () => {
  const email = useTextFormField("email", [emailValidator()]);
  const password = useTextFormField("password", [minLength(8)]);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { store } = useContext(StoreContext);
  const [role, setRole] = useState<UserRole>(UserRole.Student);
  const form = useForm<TextField, string, IRegistrationFormData>({
    fields: [password],
    apiCall: async (formData) => {
      formData.role = +formData.role;
      console.log(formData)
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
          <div className={`${styles.formField}`}>
            <div className={styles.radioGroupTitle}>
              Тип пользователя
            </div>
            <RadioGroup name='role' selectedValue={role} onChange={(value) => setRole(value)} className={styles.radioGroup}>
              <label>
                <Radio value={UserRole.Student} />
                <div className={styles.userRoleText}>
                  Студент
                </div>
              </label>
              <label>
                <Radio value={UserRole.Manager} />
                <div className={styles.userRoleText}>
                  Менеджер
                </div>
              </label>
            </RadioGroup>
          </div>
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