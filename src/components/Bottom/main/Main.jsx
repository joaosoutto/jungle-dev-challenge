import React from 'react';
import BottomButton from '../../helpers/BottomButton';

import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={`${styles.content} content`}>
      <h3>Become a nanny share host</h3>
      <p>Takes less than 5 minutes to get started</p>
      <BottomButton />
      <a href="_">Or browse local nanny-shares</a>
    </div>
  );
};

export default Main;
