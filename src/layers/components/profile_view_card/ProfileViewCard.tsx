import React, { FC } from 'react';
import styles from './ProfileViewCard.module.scss';
import emailIcon from './images/email-icon.png';
import phoneIcon from './images/phone-icon.png';

export interface IProfileViewCardProps {
  phoneNumber: string
  email: string
}

const ProfileViewCard:FC<IProfileViewCardProps> = ({ email, phoneNumber}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.fieldsList}>
          <div className={styles.field}>
            <div className={styles.key}>
              Номер телефона
            </div>
            <div className={styles.value}>
              <div className={styles.valueIcon}>
                <img src={phoneIcon}/>
              </div>
              <div className={styles.valueText}>
                {phoneNumber}
              </div>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.key}>
              Email
            </div>
            <div className={styles.value}>
              <div className={styles.valueIcon}>
                <img src={emailIcon}/>
              </div>
              <div className={styles.valueText}>
                {email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewCard;