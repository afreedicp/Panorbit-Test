import React, { useEffect, useState } from 'react';

import SideBar from '../../components/SideBar';
import { UserProfileStyles } from './styles';
import { useSelector } from 'react-redux';
import { selectAUser } from '../../Store/userSlice';

const UserProfile = () => {
  const users = useSelector(selectAUser);
  console.log(users);
  return (
    <UserProfileStyles>
      <div className='prifileConatiner'>
        {' '}
        <SideBar />{' '}
      </div>
    </UserProfileStyles>
  );
};

export default UserProfile;
