import React from "react";
import styles from "./StartPage.module.css";
import searchIcon from "../../images/search.svg";

const StartPage = () => {
  return (
    <div className={styles.start}>
      <div className={styles.content}>
        <img className={styles.startImg} src={searchIcon} alt="Search Icon" />
        <p className="startText">Start with searching a GinHub user</p>
      </div>
    </div>
  );
};

export default StartPage;
