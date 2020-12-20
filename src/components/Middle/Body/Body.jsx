import React from 'react';

import FirstDiv from '../firstDiv/FirstDiv';
import SecondDiv from '../secondDiv/SecondDiv';
import ThirdDiv from '../thirdDiv/ThirdDiv';
import FourthDiv from '../fourthDiv/FourthDiv';
import FifthDiv from '../fifthDiv/FifthDiv';

import styles from './Body.module.css';

const Body = () => {
  return (
    <section className={styles.body}>
      <FirstDiv />
      <SecondDiv />
      <ThirdDiv />
      <FourthDiv />
      <FifthDiv />
    </section>
  );
};

export default Body;
