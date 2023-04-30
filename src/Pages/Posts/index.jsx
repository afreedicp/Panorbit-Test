import { useSelector } from 'react-redux';
import SideBar from '../../components/SideBar';
import { selectAUser } from '../../Store/userSlice';
import { PostsStyles } from './styles';

const Posts = () => {
  const user = useSelector(selectAUser);
  console.log(user);
  return (
    <PostsStyles>
      <SideBar />{' '}
    </PostsStyles>
  );
};

export default Posts;
