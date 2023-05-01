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
      <div className='toDoContainer'>
        <SideBar />
        <TopBar data={user} />
        <div className='conatntDiv'>
          <span className='warningText'>Coming Soon</span>
        </div>
        <ChatBox />
      </div>
    </ToDoStyles>
  );
};

export default ToDo;
