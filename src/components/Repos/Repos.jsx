import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeActivePage, setRepos } from '../../redux/user';
import ReactPaginate from 'react-paginate';
import styles from './Repos.module.css';
import closeIcon from '../../images/close.svg';

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

  if (reposCount === 0) {
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
      {repos && (
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
      )}
      <ReactPaginate
        previousLabel='<'
        nextLabel='>'
        onPageChange={(e) => dispatch(changeActivePage(e.selected + 1))}
        containerClassName={styles.box}
        activeClassName={styles.active}
        pageCount={reposCount}
      />
    </div>
  );
};

export default Repos;
