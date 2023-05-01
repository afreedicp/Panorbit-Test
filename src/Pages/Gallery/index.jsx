import { useSelector } from 'react-redux';
import ChatBox from '../../components/ChatBox';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import { selectAUser } from '../../Store/userSlice';
import { GalleryStyles } from './styles';

const Gallery = () => {
  const user = useSelector(selectAUser);
  return (
    <>
      <GalleryStyles>
        <SideBar />
        <TopBar data={user} />
        <div className='conatntDiv'>
          <span className='warningText'>Coming Soon</span>
          <ChatBox />
        </div>
      </GalleryStyles>
    </>
  );
};

export default Gallery;
