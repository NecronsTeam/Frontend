import React, { MouseEventHandler, useContext, useRef } from 'react';
import styles from './Root.module.scss';
import { Outlet } from 'react-router-dom';
import './Reset.css';
import '../assets/fonts/comfortaa/comfortaa.css';
import './Root.css';
import { StoreContext } from '../main';
import Header from './Header/Header';
import AsideMenu from './aside_menu/AsideMenu';

const Root = () => {
  const { store } = useContext(StoreContext);
  const isAuth = store.isAuth;
  const asideMenuContainerRef = useRef<HTMLDivElement>(null);

  const hiddenBtnClickHandler: MouseEventHandler<HTMLDivElement> = (event) => {
    if (asideMenuContainerRef.current) {
      asideMenuContainerRef.current.classList.toggle(styles.hidden);
      event.currentTarget.classList.toggle(styles.active)
    }
  };

  return (
    <div className={styles.page}>
      {
        isAuth ? (
          <div className={styles.headerContainer}>
            <div className={styles.asideMenuHiddenBtnContainer}>
              <div className={styles.asideMenuHiddenBtn} onClick={hiddenBtnClickHandler}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={styles.headerWrapper}>
              <Header/>
            </div> 
          </div>
        ) : <></>
      }
      <div className={styles.column2}>
        {
          isAuth ? (
            <div className={styles.asideMenuContainer} ref={asideMenuContainerRef}>
              <AsideMenu/>
            </div>
          ) : <></>
        }
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;