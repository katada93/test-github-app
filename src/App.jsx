import { useSelector } from 'react-redux';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Profile from './components/Profile/Profile';
import searchIcon from './images/search.svg';

function App() {
  const { user } = useSelector(({ user }) => user);

  return (
    <div className='App'>
      <Header />
      {user ? (
        <Profile
          name={user.name}
          avatar={user.avatar_url}
          login={user.login}
          followers={user.followers}
          following={user.following}
        />
      ) : (
        <div className={styles.start}>
          <img className={styles.startImg} src={searchIcon} alt='Search Icon' />
          <p className='startText'>Start with searching a GinHub user</p>
        </div>
      )}
    </div>
  );
}

export default App;
