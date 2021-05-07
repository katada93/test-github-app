import styles from './App.module.css';
import Header from './components/Header/Header';
import searchIcon from './images/search.svg';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className={styles.start}>
        <img className={styles.startImg} src={searchIcon} alt='Search Icon' />
        <p className='startText'>Start with searching a GinHub user</p>
      </div>
    </div>
  );
}

export default App;
