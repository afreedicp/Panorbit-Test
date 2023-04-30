import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import { UserProfileStyles } from './styles';

const UserProfile = () => {
  const [data, setData] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location?.state) {
      setData(location.state.data);
    }
  }, [location]);
  console.log(data);
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
