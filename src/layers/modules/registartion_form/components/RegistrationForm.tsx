import React from 'react';
import styles from './RegistartionForm.module.scss';
import { useFetcher } from 'react-router-dom';

const RegistrationForm = () => {
  const fetcher = useFetcher();

  return (

    <fetcher.Form method='POST' action='/' className={styles.form}>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>
          Регистрация
        </div>
        <label className={styles.formField}>
          <div className={styles.formFieldTitle}>
            ФИО
          </div>
          
        </label>
      </div>
    </fetcher.Form>
  );
};

export default RegistrationForm;