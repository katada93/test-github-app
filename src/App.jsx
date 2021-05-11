import { useSelector } from 'react-redux';
import styles from './App.module.css';
import Header from './components/Header/Header';
import StartPage from './components/StartPage/StartPage';
import Loader from './components/Loader/Loader';
import Profile from './components/Profile/Profile';
import Repos from './components/Repos/Repos';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const { user, loading, error } = useSelector(({ user }) => user);

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        {loading ? (
          <Loader />
        ) : (
          user && (
            <div className={styles.wrapper}>
              <Profile
                name={user.name}
                avatar={user.avatar_url}
                login={user.login}
                followers={user.followers}
                following={user.following}
                url={user.html_url}
              />
              <Repos />
            </div>
          )
        )}
        {!(user || loading || error) && <StartPage />}
        {error && <ErrorPage />}
      </div>
    </div>
  );
}

export default App;
