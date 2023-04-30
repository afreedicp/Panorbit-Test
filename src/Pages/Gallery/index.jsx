import { useSelector } from 'react-redux';
import SideBar from '../../components/SideBar';
import { selectAUser } from '../../Store/userSlice';
import { GalleryStyles } from './styles';

const Gallery = () => {
  const users = useSelector(selectAUser);
  return (
    <GalleryStyles>
      <SideBar /> Gallery
    </GalleryStyles>
  );
};

export default Gallery;
