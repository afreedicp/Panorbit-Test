import { useSelector } from 'react-redux';
import ChatBox from '../../components/ChatBox';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import { selectAUser } from '../../Store/userSlice';
import { ToDoStyles } from './styles';

const ToDo = () => {
  const user = useSelector(selectAUser);
  return (
    <ToDoStyles>
      <TopBar data={user} />
      <SideBar />
      <div className='conatntDiv'>
        <span className='warningText'>Coming Soon</span>
        <ChatBox />
      </div>
    </ToDoStyles>
  );
};

export default ToDo;
