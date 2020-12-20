import React from 'react';

import styles from './Social.module.css';
import SocialLogo from '../../helpers/SocialLogo';

import logo from '../../../assets/logo.png';
import Facebook from '../../../assets/Facebook.svg';
import Twitter from '../../../assets/Twitter.svg';
import Instagram from '../../../assets/Instagram.svg';

const Social = () => {
  return (
    <div className={styles.content}>
      <img alt="hapu's logo" src={logo} />
      <div className={styles.linksDiv}>
        <a href="_">Share Your Nanny</a>
        <a href="_">Our Story</a>
        <a href="_">Blog</a>
        <a href="_">Terms & Privacy</a>
      </div>
      <div className={styles.socialDiv}>
        <SocialLogo source={Facebook} />
        <SocialLogo source={Twitter} />
        <SocialLogo source={Instagram} />
      </div>
    </div>
  );
};

export default Social;
