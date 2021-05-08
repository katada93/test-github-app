import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ name, avatar, login, followers, following }) => {
  return (
    <div className='profile'>
      <img src={avatar} alt='Profile image' className='profileImg' />
      <h3 className='name'>{name}</h3>
      <a href=''>{login}</a>
      <div className='followers'>
        <span>{followers} followers</span>
        <span>{following} following</span>
      </div>
    </div>
  );
};

export default Profile;
