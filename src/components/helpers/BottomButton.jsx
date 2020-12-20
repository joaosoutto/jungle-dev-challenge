import React from 'react';

import styles from './BottomButton.module.css';
import calendar from '../../assets/calendar.svg';

const BottomButton = () => {
  return (
    <button className={styles.bottomBtn}>
      <img className={styles.calendar} alt="calendar" src={calendar} />
      <p>Create Your Nanny Share</p>
      <p>Takes less than 5 minutes</p>
    </button>
  );
};

export default BottomButton;
