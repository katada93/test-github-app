import { useSelector } from 'react-redux';
import { Header, Loader, Profile, Repos } from './components';
import { StartPage, NotFoundPage } from './pages';
import styles from './App.module.css';

function App() {
  const { user, loading, error } = useSelector(({ user }) => user);

  const View = () => {
    if (loading) {
      return <Loader />;
    }

    if (user) {
      return (
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
      );
    }

    if (error) {
      return (
        <div className={styles.inner}>
          <NotFoundPage />
        </div>
      );
    }

    return (
      <div className={styles.inner}>
        <StartPage />
      </div>
    );
  };

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <View />
      </div>
    </div>
  );
}

export default App;
