import React, { useState } from 'react';
import styles from './CreateActivityForm.module.scss';

const CreateActivityForm = () => {

  return (
    <form >
      <label className={styles.formField}>
        <div className={styles.formFieldTitle}>
          Название
        </div>
        <div className={styles.formFieldInput}>
          <input type='text'
            name='name'
            placeholder='Название'
          />
        </div>
      </label>
      <label className={styles.formField}>
        <div className={styles.formFieldTitle}>
          Начало
        </div>
        <div className={styles.formFieldInput}>
        </div>
      </label>
    </form>
  );
};

export default CreateActivityForm;