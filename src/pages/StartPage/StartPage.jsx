import React from 'react';
import styles from './StartPage.module.css';
import searchIcon from '../../images/search.svg';

const StartPage = () => {
  return (
    <div className={styles.start}>
      <img className={styles.startImg} src={searchIcon} alt='Search Icon' />
      <p className='startText'>Start with searching a GinHub user</p>
    </div>
  );
};

export default StartPage;
