import { useSelector } from "react-redux";
import styles from "./App.module.css";

import {
  Header,
  StartPage,
  Loader,
  Profile,
  Repos,
  NotFoundPage
} from "./components";

import { useMemo } from "react";

function App() {
  const { user, loading, error } = useSelector(({ user }) => user);

  const view = useMemo(() => {
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
      return <NotFoundPage />;
    }

    return <StartPage />;
  }, [loading, user, error]);

  return (
    <div className="App">
      <Header />
      <div className="container">{view}</div>
    </div>
  );
}

export default App;
