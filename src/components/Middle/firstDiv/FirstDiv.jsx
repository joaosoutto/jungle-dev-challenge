import React from 'react';
import styles from './FirstDiv.module.css';

import image from '../../../assets/notebook.svg';
import Hr from '../../helpers/Hr';

const FirstDiv = () => {
  return (
    <>
      <div className={styles.content}>
        <div>
          <h3>
            Share your home,
            <br /> nanny and costs
          </h3>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu.
            <a href="_"> Hapu means tribe</a> and it’s our foundational 3 tribal
            principles that empowers you to create and manage your own tribe. A
            tribe that together has the power to create new affordable solutions
            in childcare that work for you and your community.
          </p>
          <a href="_">Ready to get started?</a>
        </div>
        <img alt="notebook and pricing" src={image} />
      </div>
      <Hr />
    </>
  );
};

export default FirstDiv;
