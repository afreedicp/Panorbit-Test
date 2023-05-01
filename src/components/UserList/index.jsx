import { UserListStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../Store/userSlice';
const UserList = ({ data, from }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setUser = (element) => {
    dispatch(getCurrentUser({ data: element }));
    navigate('/user/profile');
  };
  return (
    <UserListStyles>
      <div
        className={`userContainer  ${
          (from === 'profile' || from === 'chatbox') && 'reducedUserContainer'
        }`}
        onClick={() => {
          from !== 'chatbox' && setUser(data);
        }}
      >
        <img
          className='profilePicDiv'
          src={data.profilepicture}
          alt='profile-pic'
        />
        <div className='d-flex justify-content-between w-100 align-items-center pe-3'>
          <span className='userName'>{data.name}</span>
          {from === 'chatbox' && <span className='onlineIndicator'></span>}
        </div>
      </div>
    </UserListStyles>
  );
};

export default UserList;
