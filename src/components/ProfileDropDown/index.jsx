import React from 'react';
import { ProfileDropDownStyles } from './styles';
import { useSelector } from 'react-redux';
import { selectAUser, selectUsers } from '../../Store/userSlice';
import UserList from '../UserList';
import { useNavigate } from 'react-router-dom';
const ProfileDropDown = () => {
  const navigate = useNavigate();
  const users = useSelector(selectUsers);
  const user = useSelector(selectAUser);

  return (
    <ProfileDropDownStyles>
      <div className='dropDownContainer'>
        <div>
          <img
            className='profilePicDiv mb-3'
            src={user?.profilepicture}
            alt='profilePic'
          />
          <div className='nameDiv'>{user?.name}</div>
          <div className='emailDiv'>{user?.email}</div>
        </div>
        <div className='usersList'>
          {users.users.map((item) => (
            <UserList data={item} from={'profile'} />
          ))}
        </div>
        <button
          type='buttin'
          onClick={() => navigate('/')}
          className='signoutButton'
        >
          Sign out
        </button>
      </div>
    </ProfileDropDownStyles>
  );
};

export default ProfileDropDown;
