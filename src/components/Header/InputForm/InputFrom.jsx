import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../../redux/user";

import styles from "./InputForm.module.css";

const InputForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onSetValue = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const onFetchData = useCallback(
    (event) => {
      if (event.key === "Enter") {
        dispatch(fetchUserData(value));
      }
    },
    [dispatch, value]
  );
  return (
    <input
      className={styles.input}
      onKeyPress={onFetchData}
      onChange={onSetValue}
      value={value}
      type="text"
      placeholder="Enter GitHub username"
    />
  );
};

export default InputForm;
