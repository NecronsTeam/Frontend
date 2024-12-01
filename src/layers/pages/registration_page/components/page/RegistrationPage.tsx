import React from 'react';
import styles from './RegistrationPage.module.scss';
import RegistrationForm from '../../../../modules/registartion_form/components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        <div className={styles.formWrapper}>
          <RegistrationForm/>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;