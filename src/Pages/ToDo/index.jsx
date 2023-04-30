import { useSelector } from 'react-redux';
import SideBar from '../../components/SideBar';
import { selectAUser } from '../../Store/userSlice';
import { ToDoStyles } from './styles';

const ToDo = () => {
  const users = useSelector(selectAUser);
  return (
    <ToDoStyles>
      <SideBar />{' '}
    </ToDoStyles>
  );
};

export default ToDo;
