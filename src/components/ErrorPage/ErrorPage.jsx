import React from 'react';
import styles from './ErrorPage.module.css';
import userIcon from '../../images/user-big.svg';

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <img className={styles.errorImg} src={userIcon} alt='Search Icon' />
      <p className='startText'>User not found</p>
    </div>
  );
};

export default ErrorPage;
