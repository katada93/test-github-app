import React from 'react';
import styles from './NotFoundPage.module.css';
import userIcon from '../../images/user-big.svg';

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <img className={styles.notFoundImg} src={userIcon} alt='Search Icon' />
      <p className='startText'>User not found</p>
    </div>
  );
};

export default NotFoundPage;
