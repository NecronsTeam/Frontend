import React, { act, FC } from 'react';
import styles from './Activity.module.scss';
import { IActivity } from '../../../types/IActivity';

interface IActivityProps {
  activity: IActivity
}

const Activity:FC<IActivityProps> = ({activity}) => {
  console.log(activity)
  return (
    <div className={styles.activity}>
      <div className={styles.avatar}>
        <div className={styles.avatarContainer}>
          <img src='https://www.business.ru/images/articles/2023/27_b.jpg'/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          {activity.name}
        </div>
        <div className={styles.description}>
          <p className={styles.descriptionTitle}>
            Описание
          </p>
          <div className={styles.descriptionText}>
            {
              activity.description
            }
          </div>
        </div>
        <div className={styles.competencies}>
          <div className={styles.competenciesTitle}>
            Компентенции
          </div>
          <ul className={styles.competenciesList}>
            {
              activity.competences.map(competency => (
                <li className={styles.competenciesListItem} key={competency.id}>
                  {competency.name}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity;