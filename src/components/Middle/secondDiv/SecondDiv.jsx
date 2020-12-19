import React from 'react';
import Hr from '../../helpers/Hr';
import styles from './SecondDiv.module.css';

const SecondDiv = () => {
  return (
    <>
      <div className={styles.content}>
        <h4>Are you a parent without a nanny and looking to share?</h4>
        <p>
          Leave us your name and email and we’ll update you as soon as a share
          becomes available in your area!
        </p>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" />
          <button type="submit">Send</button>
        </form>
      </div>
      <Hr />
    </>
  );
};

export default SecondDiv;
