import { useSelector } from 'react-redux';
import ChatBox from '../../components/ChatBox';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import { selectAUser } from '../../Store/userSlice';
import { PostsStyles } from './styles';

const Posts = () => {
  const user = useSelector(selectAUser);
  console.log(user);
  return (
    <PostsStyles>
      <SideBar />
      <TopBar data={user} />
      <div className='conatntDiv'>
        <span className='warningText'>Coming Soon</span>
        <ChatBox />
      </div>
    </PostsStyles>
  );
};

export default Posts;
