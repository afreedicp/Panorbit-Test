import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from '../../components/UserList';
import { getUsersList, selectUsers } from '../../Store/userSlice';
import { LandingPageStyles } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
