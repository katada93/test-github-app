import React from 'react';
import logo from '../../images/github.svg';
import searchIcon from '../../images/search.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img src={logo} alt='Logo' />
          </div>
          <div className={styles.search}>
            <img
              className={styles.searchIcon}
              src={searchIcon}
              alt='Search icon'
            />
            <input
              className={styles.input}
              type='text'
              placeholder='Enter GitHub username'
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
