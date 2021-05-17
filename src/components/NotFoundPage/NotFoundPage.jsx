import React from 'react';
import styles from './NotFoundPage.module.css';
import userIcon from '../../images/user-big.svg';

const NotFoundPage = () => {
  return (
    <div className={styles.error}>
      <img className={styles.errorImg} src={userIcon} alt='Search Icon' />
      <p className='startText'>User not found</p>
    </div>
  );
};

export default NotFoundPage;
