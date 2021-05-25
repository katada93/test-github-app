import axios from "axios";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActivePage, setRepos } from "../../redux/user";
import ReactPaginate from "react-paginate";
import styles from "./Repos.module.css";
import closeIcon from "../../images/close.svg";

const Repos = () => {
  const dispatch = useDispatch();
  const { repos, user, reposCount, activePage } = useSelector(
    ({ user }) => user
  );

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${user.login}/repos?per_page=4&page=${activePage}`
      )
      .then(({ data }) => {
        dispatch(setRepos(data));
      })
      .catch((e) => console.log(e));
  }, [dispatch, user, activePage]);

  const reposView = useMemo(() => {
    if (!repos) {
      return null;
    }

    return (
      <ul className={styles.list}>
        {repos.map((repo) => (
          <li key={repo.id} className={styles.listItem}>
            <a
              className={styles.link}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
            <p className={styles.description}>{repo.description}</p>
          </li>
        ))}
      </ul>
    );
  }, [repos]);

  if (reposCount === 0) {
    return (
      <div className={styles.repos}>
        <div className={styles.inner}>
          <img className={styles.closeIcon} src={closeIcon} alt="" />
          <p>Repository list is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.repos}>
      <h3 className={styles.title}>Repositories ({user.public_repos})</h3>
      {reposView}
      <div className={styles.pagination}>
        <span>
          {activePage * 4 - 3}-{activePage * 4} of repos
        </span>
        <ReactPaginate
          previousLabel={"<"}
          previousLinkClassName={styles.prevArrow}
          nextLinkClassName={styles.nextArrow}
          nextLabel=">"
          onPageChange={(e) => dispatch(changeActivePage(e.selected + 1))}
          containerClassName={styles.box}
          activeClassName={styles.active}
          pageCount={reposCount}
        />
      </div>
    </div>
  );
};

export default Repos;
