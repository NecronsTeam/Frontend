import React, { useContext } from 'react';
import styles from './AsideMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../main';

const AsideMenu = () => {
  const { store } = useContext(StoreContext);

  return (
    <div className={styles.menu}>
      <div className={styles.menuContainer}>
        <div className={styles.navLinkContainer}>
          <NavLink to={'/activities'} className={({ isActive }) =>
            isActive ? styles.active : ''
          }>
            <div className={`${styles.navLinkIcon} ${styles.activity}`}></div>
            <div className={styles.navLinkText}>
              Мероприятия
            </div>
          </NavLink>
        </div>
        <div className={styles.navLinkContainer}>
          <NavLink to={`/profile/${store.user.id}`} className={({ isActive }) =>
            isActive ? styles.active : ""
          }>
            <div className={`${styles.navLinkIcon} ${styles.profile}`}></div>
            <div className={styles.navLinkText}>
              Профиль
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AsideMenu;