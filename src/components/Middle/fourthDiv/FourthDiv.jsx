import React from 'react';
import Hr from '../../helpers/Hr';
import styles from './FourthDiv.module.css';

import history from '../../../assets/history.svg';

const FourthDiv = () => {
  return (
    <>
      <div className={styles.content}>
        <div>
          <h3>A framework built for the long term</h3>
          <p>
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </p>
          <a href="_">Read how Hapu’s tribal background defines our app </a>
        </div>
        <img alt="exemple of billing history" src={history} />
      </div>
      <Hr />
    </>
  );
};

export default FourthDiv;
