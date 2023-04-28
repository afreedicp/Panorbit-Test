import React, { useEffect, useState } from 'react';
import wave from '../../Assets/wave.svg';
import UserList from '../../components/UserList';
import { LandingPageStyles } from './styles';
const Home = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);
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
              <UserList data={item} />
            ))}
          </div>
        </div>
      </div>
    </LandingPageStyles>
  );
};

export default Home;
