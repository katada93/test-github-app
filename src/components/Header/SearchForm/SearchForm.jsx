import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../../redux/user";
import searchIcon from "../../../images/search.svg";

import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onSetValue = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const onFetchData = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(fetchUserData(value));
    },
    [dispatch, value]
  );
  return (
    <form className={styles.search} onSubmit={onFetchData}>
      <img className={styles.searchIcon} src={searchIcon} alt="Search icon" />
      <input
        className={styles.input}
        onChange={onSetValue}
        value={value}
        type="text"
        placeholder="Enter GitHub username"
      />
    </form>
  );
};

export default SearchForm;
