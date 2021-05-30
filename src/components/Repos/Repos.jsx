import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import closeIcon from '../../images/close.svg';
import { changeCurrentPage, fetchRepos } from '../../redux/repos';
import Loader from '../Loader/Loader';
import styles from './Repos.module.css';
import Pagination from './Pagination/Pagination';

const Repos = () => {
  const dispatch = useDispatch();
  const { user, pageCount, repos, currentPage, loading } = useSelector(
    (state) => ({ ...state.user, ...state.repos })
  );

  useEffect(() => {
    dispatch(fetchRepos(user.login, currentPage));
  }, [dispatch, user, currentPage]);

  const view = useMemo(() => {
    if (loading) {
      return <Loader />;
    }

    return (
      <ul className={styles.list}>
        {repos.map((repo) => (
          <li key={repo.id} className={styles.listItem}>
            <a
              className={styles.link}
              href={repo.html_url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {repo.name}
            </a>
            <p className={styles.description}>{repo.description}</p>
          </li>
        ))}
      </ul>
    );
  }, [repos, loading]);

  if (pageCount === 0) {
    return (
      <div className={styles.repos}>
        <div className={styles.inner}>
          <img className={styles.closeIcon} src={closeIcon} alt='' />
          <p>Repository list is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.repos}>
      <h3 className={styles.title}>Repositories ({user.public_repos})</h3>
      {view}
      <div className={styles.pagination}>
        <span>
          {currentPage * 4 - 3}-{currentPage * 4} of repos
        </span>
        <Pagination
          count={pageCount}
          onChange={(page) => dispatch(changeCurrentPage(page))}
        />
      </div>
    </div>
  );
};

export default Repos;
