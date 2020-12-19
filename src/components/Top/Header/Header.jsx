import React from 'react';
import Logo from '../../helpers/Logo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Logo />
        <a href="_blank">Create Your Nanny Share</a>
        <a href="_blank">Browse Shares</a>
        <a href="_blank">Our Story</a>
      </nav>
      <nav>
        <button onClick={() => alert('Thanks!')}>
          Become a Nanny Share Host
        </button>
        <a href="_blank">Sign In</a>
      </nav>
    </header>
  );
};

export default Header;
