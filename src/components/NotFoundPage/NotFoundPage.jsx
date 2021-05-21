import React from "react";
import styles from "./NotFoundPage.module.css";
import userIcon from "../../images/user-big.svg";

const NotFoundPage = () => {
  return (
    <div className={styles.error}>
      <div className={styles.content}>
        <img className={styles.errorImg} src={userIcon} alt="Search Icon" />
        <p className="startText">User not found</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
