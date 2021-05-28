import logo from '../../images/github.svg';
import SearchForm from './SearchForm/SearchForm';
import styles from './Header.module.css';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../redux/user';

const Header = () => {
  const dispatch = useDispatch();

  const onFetchData = (value) => dispatch(fetchUserData(value));

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <a href='/'>
              <img src={logo} alt='Logo' />
            </a>
          </div>
          <SearchForm onSubmit={onFetchData} />
        </div>
      </div>
    </header>
  );
};

export default Header;
