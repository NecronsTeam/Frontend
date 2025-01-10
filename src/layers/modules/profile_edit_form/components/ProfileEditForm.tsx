import React, { FC, useRef, useState } from 'react';
import styles from './ProfileEditForm.module.scss';
import { IProfile } from '../../../../types/Profile';
import useTextFormField, { TextField } from '../../../../hooks/useTextFormField';
import { emailValidator } from '../../../../validation/validators/email';
import { phoneNumberValidator } from '../../../../validation/validators/phoneNumber';
import { telegramValidator } from '../../../../validation/validators/telegram';
import useForm from '../../../../hooks/useForm';
import { AxiosResponse } from 'axios';
import ValidableTextInput from '../../../ui/validable_input/ValidableInput';
import { IProfileForUpdate } from '../../../../types/IProfileForUpdate';
import ProfileService from '../../../../services/ProfileService';

interface IProfileEditFormProps {
  profile: IProfile
}

const ProfileEditForm:FC<IProfileEditFormProps> = ({profile}) => {
  const email = useTextFormField('email', [emailValidator()]);
  const phoneNumber = useTextFormField('phoneNumber', [phoneNumberValidator()]);
  const telegramLink = useTextFormField('telegramLink', [telegramValidator()]);
  const [isSuccesSubmit, setIsSuccesSubmit] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<TextField, AxiosResponse, IProfileForUpdate>({
    fields: [email, phoneNumber, telegramLink],
    apiCall: async (IProfileForUpdate) => {
      const response = await ProfileService.updateMy(IProfileForUpdate);

      return response;
    },
    onSucces: async (response) => {
      setIsSuccesSubmit(true);
    }
  });
  return (
    <form method='POST' className={styles.form} onSubmit={form.handleFormSubmit} ref={formRef}>
      <div className={styles.title}>
        Редактирование профиля
      </div>
      <div className={styles.formFields}>
        <div className={styles.fullName}>
          <label className={styles.formField}>
            <div className={styles.formFieldTitle}>
              Имя
            </div>
            <div className={styles.formFieldInput}>
              <input type='text'
                name='firstName'
                placeholder='Имя'
              />
            </div>
          </label>
          <label className={styles.formField}>
            <div className={styles.formFieldTitle}>
              Фамилия
            </div>
            <div className={styles.formFieldInput}>
              <input type='text'
                name='middleName'
                placeholder='Фамилия'
              />
            </div>
          </label>
          <label className={styles.formField}>
            <div className={styles.formFieldTitle}>
              Отчество
            </div>
            <div className={styles.formFieldInput}>
              <input type='text'
                name='lastName'
                placeholder='Отчество'
              />
            </div>
          </label>
        </div>
        <label className={`${styles.telegramLink} ${styles.formField}`}>
          <div className={styles.formFieldTitle}>
            Telegram
          </div>
          <div className={styles.formFieldInput}>
            <ValidableTextInput
              type='text'
              field={telegramLink}
              name='telegramLink'
              placeholder='Ссылка на телеграм'
            />            
          </div>
        </label>
        <label className={`${styles.telegramLink} ${styles.formField}`}>
          <div className={styles.formFieldTitle}>
            Email
          </div>
          <div className={styles.formFieldInput}>
            <ValidableTextInput
              type='text'
              field={email}
              name='Email'
              placeholder='Email'
            />            
          </div>
        </label>
        <label className={`${styles.telegramLink} ${styles.formField}`}>
          <div className={styles.formFieldTitle}>
            Номер телефона
          </div>
          <div className={styles.formFieldInput}>
            <ValidableTextInput
              type='text'
              field={phoneNumber}
              name='phoneNumber'
              placeholder='Номер телефона'
            />            
          </div>
        </label>
        <div className={styles.submitBtn}>
          <button type='submit'>
            Отправить
          </button>
        </div>
        <div className={styles.sendingStatus}>
          {
            isSuccesSubmit ? (
              <div className={styles.succes}>
                Данные профиля успешно обновлены!
              </div>
            ) : form.sendingError ? (
              <div className={styles.error}>
                {form.sendingError}
              </div>
            ) : <></>
          }
        </div>
      </div>
    </form>
  );
};

export default ProfileEditForm;