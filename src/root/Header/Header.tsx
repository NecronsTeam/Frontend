import React from 'react';
import styles from './Header.module.scss';
import settingsIcon from './images/settings.png';
import notificationIcon from './images/notifications.png';
import avatarExample from './images/a.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.navInfo}>
          Страница
        </div>
        <div className={styles.btnPanel}>
          <div className={styles.settings}>
            <button type='button' className='_clearButton'>
              <img src={settingsIcon}/>
            </button>
          </div>
          <div className={styles.notifications}>
            <button type='button' className='_clearButton'>
              <img src={notificationIcon}/>
            </button>
          </div>
          <div className={styles.avatar}>
            <Link to={''}>
              <img src={avatarExample} className='_coverFitImg'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;