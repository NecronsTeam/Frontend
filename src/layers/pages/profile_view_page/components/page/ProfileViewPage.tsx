import React from 'react';
import styles from './ProfileViewPage.module.scss';
import avatarExample from '../../images/example.png';

const ProfileViewPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.headerInfo}>
              <div className={styles.fullName}>
                ИВАН ИВАНОВd
              </div>
              <div className={styles.tgLink}>
                @tgLink
              </div>              
            </div>
            <div className={styles.settingsBtn}>
              <button>
                Настройки
              </button>
            </div>
            <div className={styles.profileAvatar}>
              <div className={styles.profileAvatarContainer}>
                <img src={avatarExample}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewPage;