import React, { act } from 'react';
import styles from './ActivitiesListPage.module.scss';
import { useLoaderData } from 'react-router-dom';
import { IActivity } from '../../../../types/IActivity';
import { Link } from 'react-router-dom';
import CreateActivityForm from '../../../modules/create_activity_form/components/CreateActivityForm';
import ActivityCard from '../../../components/activity_card/ActivityCard';

const ActivitiesListPage = () => {
  const activities = useLoaderData<IActivity[]>();
  
  return (
    <div className={`${styles.page} _flexGrow`}>
      <div className={`${styles.pageContainer}`}>
        <div className={styles.header}>
          <div className={styles.title}>
            Мои мероприятия
          </div>
          <div className={styles.createActivityBtn}>
            <Link to='/activities/create'>
              Создать мероприятие
            </Link>
          </div>
        </div>
        <div className={styles.activities}>
          <ul className={styles.activitiesList}>
            {
              activities.map(activity => (
                <li className={styles.activitiesListItem}>
                  <ActivityCard activity={activity}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesListPage;