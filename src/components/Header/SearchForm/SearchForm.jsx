import { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../../images/search.svg';
import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onSetValue = (event) => setValue(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <img className={styles.searchIcon} src={searchIcon} alt='Search icon' />
      <input
        className={styles.input}
        onChange={onSetValue}
        value={value}
        type='text'
        placeholder='Enter GitHub username'
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
