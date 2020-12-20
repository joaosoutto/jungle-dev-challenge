import React from 'react';

import Hr from '../../helpers/Hr';
import styles from './ThirdDiv.module.css';
import amout from '../../../assets/amount.svg';

const ThirdDiv = () => {
  return (
    <>
      <div className={`${styles.content} content`}>
        <img alt="representation of the system" src={amout} />
        <div>
          <h3>Shared payments made simple</h3>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need enver talk
            money or who owes what.
          </p>
          <a href="_">Read how Bridget's share (without Hapu) ended over $15</a>
        </div>
      </div>
      <Hr />
    </>
  );
};

export default ThirdDiv;
