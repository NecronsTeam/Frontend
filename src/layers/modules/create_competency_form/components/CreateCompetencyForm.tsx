import React, { FC } from 'react';
import styles from './CreateCompetencyForm.module.scss';
import useForm from '../../../../hooks/useForm';
import { TextField } from '../../../../hooks/useTextFormField';
import { AxiosResponse } from 'axios';
import { ICreateCompetencyFormData } from '../../../../types/ICreateCompetencyFormData';
import { CompetencyService } from '../../../../services/CompetencyService';
import { ICompetency } from '../../../../types/ICompetency';

interface ICreateCompetencyFormProps {
  onSuccesCreate: (competency: ICompetency) => void
}

const CreateCompetencyForm: FC<ICreateCompetencyFormProps> = ({ onSuccesCreate }) => {
  const form = useForm<TextField, AxiosResponse<ICompetency>, ICreateCompetencyFormData>({
    fields: [],
    apiCall: async (formData) => {
      const response = await CompetencyService.create(formData);

      return response;
    },
    onSucces: async (response) => {
      onSuccesCreate(response.data);
    },
  })
  return (
    <form className={styles.form} method='POST' onSubmit={form.handleFormSubmit}>
      <div className={styles.formTitle}>
        Новая компентенция:
      </div>
      <div className={styles.line}>
        <input type='text' placeholder='Название компетенции' name='name' className={styles.input} />
        <button className={styles.submitBtn}>
          &#43;
        </button>
      </div>
      <div className={`${styles.sendingError} ${!form.sendingError ? styles.hidden : ''}`}>
        {
          form.sendingError
        }
      </div>
    </form>
  );
};

export default CreateCompetencyForm;