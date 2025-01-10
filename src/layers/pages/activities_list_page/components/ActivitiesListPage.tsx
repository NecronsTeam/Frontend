import React, { act } from 'react';
import styles from './ActivitiesListPage.module.scss';
import { useLoaderData } from 'react-router-dom';
import { IActivity } from '../../../../types/IActivity';
import { Link } from 'react-router-dom';
import CreateActivityForm from '../../../modules/create_activity_form/components/CreateActivityForm';

const ActivitiesListPage = () => {
  const activities = useLoaderData<IActivity[]>();
  
  return (
    <div className={`${styles.page} _flexGrow`}>
      <div className={`${styles.pageContainer}`}>
        <div className={styles.header}>
          <div className={styles.createActivityBtn}>
            <Link to='/activities/create'>
              Создать мероприятие
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesListPage;