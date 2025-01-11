import React, { FC } from 'react';
import styles from './ActivityCard.module.scss';
import { IActivity } from '../../../types/IActivity';
import { Link } from 'react-router-dom';

interface IActivityCardProps {
  activity: IActivity
}

const ActivityCard: FC<IActivityCardProps> = ({ activity }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <div className={styles.coverContainer}>
          <img src='https://sun9-75.userapi.com/impg/2Ba1oGj5IMdG7NNZV3znjym-qTCnNxAhRyDmCw/FxmTtEuIJWI.jpg?size=1215x717&quality=95&sign=022171b6558344621f5534c99bbf1e67&type=album' />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.name}>
          {activity.name}
        </div>
        <div className={styles.link}>
          <Link to={''}>
            <div className={styles.linkIcon}>
            </div>
            <div className={styles.linkText}>
              Перейти
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;