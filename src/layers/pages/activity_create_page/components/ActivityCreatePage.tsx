import React, { useState } from 'react';
import styles from './ActivityCreatePage.module.scss';
import { useFetcher } from 'react-router-dom';
import { IActivity } from '../../../../types/IActivity';
import { IActivityFormData } from '../../../../types/IActivityFormData';
import useForm from '../../../../hooks/useForm';
import { TextField } from '../../../../hooks/useTextFormField';
import { AxiosResponse } from 'axios';
import { ActivityService } from '../../../../services/ActivityService';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { Competency, ICompetency } from '../../../../types/ICompetency';
import CompetenciesPicker from '../../../modules/competencies_picker/components/CompetenciesPicker';
import CompetencyCard from '../../../components/competency_card/CompetencyCard';
import CreateCompetencyForm from '../../../modules/create_competency_form/components/CreateCompetencyForm';

const ActivityCreatePage = () => {
  const createForm = useForm<TextField, AxiosResponse<IActivity>, IActivityFormData>({
    fields: [],
    apiCall: async (formData) => {
      formData.dateFrom = dateFrom.toJSON();
      formData.dateTo = dateTo.toJSON();
      formData.competenciesIds = competencies.map(c => c.id);
      const response = await ActivityService.create(formData)
      return response;
    },
    onSucces: async (response) => {
      console.log(response.data)
    }
  });

  const [dateTo, setDateTo] = useState(new Date());
  const [dateFrom, setDateFrom] = useState(new Date());
  const [competencies, setCompetencies] = useState<ICompetency[]>([]);

  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        <h1 className={styles.title}>
          Новое мепроприятие
        </h1>
        <form method='POST' className={styles.createForm} onSubmit={createForm.handleFormSubmit}>
          <div className={styles.formContainer}>
            <label className={styles.formField}>
              <div className={styles.formFieldTitle}>
                Название
              </div>
              <div className={styles.formFieldInput}>
                <input type='text' name='name' placeholder='название' />
              </div>
            </label>
            <label className={styles.formField}>
              <div className={styles.formFieldTitle}>
                Описание
              </div>
              <div className={`${styles.formFieldInput} ${styles.formFieldInputDescription}`}>
                <textarea name='description' placeholder='описание' />
              </div>
            </label>
            <label className={styles.formField}>
              <div className={styles.formFieldTitle}>
                Ссылка на организационный чат
              </div>
              <div className={styles.formFieldInput}>
                <input type='text' name='orgChatLink' placeholder='https://example.com' />
              </div>
            </label>
            <div className={styles.formField}>
              <div className={styles.formFieldTitle}>
                Старт мепроприятия
              </div>
              <div className={styles.formFieldInput}>
                <DatePicker selected={dateFrom} onChange={(date) => setDateFrom(date ?? new Date())} showTimeSelect />
              </div>
            </div>
            <div className={styles.formField}>
              <div className={styles.formFieldTitle}>
                Конец мепроприятия
              </div>
              <div className={styles.formFieldInput}>
                <DatePicker selected={dateTo} onChange={(date) => setDateTo(date ?? new Date())} showTimeSelect />
              </div>
            </div>
          </div>
          <button type='submit'>
            Создать
          </button>
        </form>
        <div className={styles.competency}>
          <div className={`${styles.fieldCompetency}`}>
            <CompetenciesPicker competencies={competencies} onChange={(competencies) => setCompetencies(competencies)} />
          </div>
          <div className={styles.createCompetencyForm}>
            <CreateCompetencyForm onSuccesCreate={(competency) => setCompetencies([...competencies, competency])} />
          </div>          
        </div>
      </div>
    </div>
  );
};

export default ActivityCreatePage;