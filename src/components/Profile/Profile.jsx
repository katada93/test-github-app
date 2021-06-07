import { useMemo } from 'react';
import styles from './Profile.module.css';
import followersIcon from '../../images/users.svg';
import followingIcon from '../../images/user.svg';
import { formatNumber } from '../../utils.js';

const Profile = (props) => {
  const { name, avatar, login, followers, following, url } = props;

  const followersNormalized = useMemo(
    () => formatNumber(followers),
    [followers]
  );

  return (
    <div className={styles.profile}>
      <img src={avatar} alt='Profile' className={styles.profileImg} />
      <h3 className={styles.name}>{name}</h3>
      <a
        href={url}
        className={styles.login}
        target='_blank'
        rel='noopener noreferrer'
      >
        {login}
      </a>
      <div className={styles.followersWrapper}>
        <div className={styles.followers}>
          <img
            className={styles.followersIcon}
            src={followersIcon}
            alt='Icon'
          />
          <span>{followersNormalized} followers</span>
        </div>
        <div className={styles.following}>
          <img className={styles.followingIcon} src={followingIcon} alt='' />
          <span>{following} following</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
