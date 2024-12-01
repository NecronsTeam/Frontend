import React from 'react';
import styles from './Root.module.scss';
import { Outlet } from 'react-router-dom';
import './Reset.css';
import '../assets/fonts/comfortaa/comfortaa.css';

const Root = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Outlet/>
      </main>
    </div>
  );
};

export default Root;