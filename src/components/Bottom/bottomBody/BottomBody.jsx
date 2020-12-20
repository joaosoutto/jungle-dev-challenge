import React from 'react';

import Main from '../main/Main';
import Social from '../social/Social';
import Copyright from '../copyright/Copyright';

import styles from './Bottom.module.css';

const BottomBody = () => {
  return (
    <footer className={styles.footer}>
      <Main />
      <Social />
      <Copyright />
    </footer>
  );
};

export default BottomBody;
