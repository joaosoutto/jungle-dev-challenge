import React from 'react';

import Hr from '../../helpers/Hr';
import UserForm from '../../helpers/UserForm';
import styles from './SecondDiv.module.css';

const SecondDiv = () => {
  return (
    <>
      <div className={`${styles.content} content`}>
        <h3>Are you a parent without a nanny and looking to share?</h3>
        <p>
          Leave us your name and email and we’ll update you as soon as a share
          becomes available in your area!
        </p>
        <UserForm />
      </div>
      <Hr />
    </>
  );
};

export default SecondDiv;
