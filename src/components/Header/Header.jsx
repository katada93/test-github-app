import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../images/github.svg';
import searchIcon from '../../images/search.svg';
import { setError, setLoading, setUserData } from '../../redux/user';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const onSetValue = (event) => {
    setValue(event.target.value);
  };

  const fetchUserData = (event) => {
    if (event.key === 'Enter') {
      dispatch(setLoading(true));
      dispatch(setError(false));
      axios
        .get(`https://api.github.com/users/${value}`)
        .then(({ data }) => {
          dispatch(setLoading(false));
          dispatch(setUserData(data));
        })
        .catch((e) => {
          console.log(e);
          dispatch(setLoading(false));
          dispatch(setError(true));
        });
    }
  };

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <a href='/'>
              <img src={logo} alt='Logo' />
            </a>
          </div>
          <div className={styles.search}>
            <img
              className={styles.searchIcon}
              src={searchIcon}
              alt='Search icon'
            />
            <input
              className={styles.input}
              onKeyPress={fetchUserData}
              onChange={onSetValue}
              value={value}
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
