import { useSelector } from 'react-redux';
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
      </div>
    </ToDoStyles>
  );
};

export default ToDo;
