import React from 'react';

import styles from './Sarah.module.css';
import profile from '../../../assets/profile.png';

const Sarah = () => {
  return (
    <div className={styles.content}>
      <img className={styles.profile} src={profile} alt="Sarah" />
      <a href="_">Sarah's day care available now in North Sydney</a>
      <p>Wednesday, Thursday, Friday, - 7:30 - 5:30</p>
    </div>
  );
};

export default Sarah;
