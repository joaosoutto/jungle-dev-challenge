import React, { useState } from 'react';
import styles from './Hero.module.css';

import img from '../../../assets/img1.svg';
import Title from '../../helpers/Title';
import Paragraph from '../../helpers/Paragraph';

import player from '../../../assets/player.png';

const Hero = () => {
  const [testA, setTestA] = useState(true);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div>
          {testA ? (
            <Title text="Easily create or join a local nanny share with Hapu" />
          ) : (
            <Title text="Create the childcare you need at a price you can afford" />
          )}
          {testA ? (
            <Paragraph text="Hapu is Airbnb nanny share. Share your home, nanny and costs and create new flexibile, affordable solutions in childcare." />
          ) : (
            <Paragraph text="Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started." />
          )}
          <div onClick={() => setTestA(!testA)}>
            <img alt="player" src={player} className={styles.player} />
            <p href="_">See hapu in action (27 seconds)</p>
          </div>
        </div>
        <div className={styles.r}>
          <img alt="Manage your nanny share" className={styles.img} src={img} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
