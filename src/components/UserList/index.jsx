import { UserListStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../Store/userSlice';
const UserList = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setUser = (element) => {
    dispatch(getCurrentUser({ data: element }));
    navigate('/user/profile');
  };
  return (
    <UserListStyles>
      <div
        className='userContainer'
        onClick={() => {
          setUser(data);
        }}
      >
        <img
          className='profilePicDiv'
          src={data.profilepicture}
          alt='profile-pic'
        />
        <span className='userName'>{data.name}</span>
      </div>
    </UserListStyles>
  );
};

export default UserList;
