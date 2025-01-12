import React, { useEffect, useState } from 'react';
import styles from './ActivityPage.module.scss';
import { useParams } from 'react-router-dom';
import Activity from '../../modules/activity/Activity';
import { ActivityService } from '../../../services/ActivityService';
import { IActivity } from '../../../types/IActivity';

const ActivityPage = () => {
  const { activityId } = useParams();
  const [activity, setActivity] = useState<IActivity>();

  useEffect(() => {
    if (activityId) {
       const response = ActivityService.getById(+activityId).then(res => setActivity(res.data));
    }
  }, [])
  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        <div className={styles.activity}>
         {
          activity ? <Activity activity={activity}/> : <></>
         }
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;