import logo from "../../images/github.svg";
import searchIcon from "../../images/search.svg";
import InputForm from "./InputForm/InputFrom";
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
          <div className={styles.search}>
            <img
              className={styles.searchIcon}
              src={searchIcon}
              alt="Search icon"
            />
            <InputForm />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
