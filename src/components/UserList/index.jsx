import { UserListStyles } from './styles';
import { useNavigate } from 'react-router-dom';
const UserList = ({ data }) => {
  const navigate = useNavigate();
  return (
    <UserListStyles>
      <div
        className='userContainer'
        onClick={() => navigate('/profile', { state: { data } })}
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
