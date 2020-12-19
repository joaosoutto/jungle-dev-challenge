import React from 'react';
import styles from './FifthDiv.module.css';

import figures from '../../../assets/figures.svg';

const FifthDiv = () => {
  return (
    <div className={styles.content}>
      <img src={figures} />
      <h3>Coming soon: Nanny Share Daily Diary!</h3>
      <p>
        With the Hapu daily diary your nanny will be able to update you and your
        sharers with photos and commentary of the day. You and sharers will
        receive notifications and you’ll be able to login to view the daily
        adventures fo your little ones. We can’t wait!
      </p>
    </div>
  );
};

export default FifthDiv;
