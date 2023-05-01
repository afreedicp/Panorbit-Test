import React, { useEffect, useState } from 'react';
import wave from '../../Assets/wave.svg';
import UserList from '../../components/UserList';
import { LandingPageStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersList, selectUsers } from '../../Store/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList());
  }, []);
  const users = useSelector(selectUsers);
  return (
    <LandingPageStyles>
      <div className='landingPageContainer'>
        <div className='backgroundDiv'></div>
        <div className='accountListContainer'>
          <div className='topNav'>
            <span>Select an account</span>
          </div>
          <div className='usersListdiv'>
            {users?.users.map((item) => (
              <UserList data={item} from={'home'} />
            ))}
          </div>
        </div>
      </div>
    </LandingPageStyles>
  );
};

export default Home;
