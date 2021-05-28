import logo from "../../images/github.svg";
import SearchForm from "./SearchForm/SearchForm";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.logo}>
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
