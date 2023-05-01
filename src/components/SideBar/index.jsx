import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SideBarStyles } from './style';
import arrow from '../../Assets/arrow.svg';
const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname.split('/')[2];
  const [activeNav, setActiveNav] = useState(currentLocation);
  return (
    <SideBarStyles>
      <div className='sidebarContainer'>
        <nav
          className={`navBarsStyle ${activeNav === 'profile' && 'active '}`}
          onClick={() => {
            if (activeNav !== 'profile') {
              setActiveNav('profile');
              navigate('/user/profile');
            }
          }}
        >
          {activeNav === 'profile' && (
            <div className='activeNagigation d-flex align-items-center justify-content-end'>
              <img className='arrowHead' src={arrow} alt='arrow ' />
            </div>
          )}
          Profile
        </nav>
        <nav
          className={`navBarsStyle ${
            activeNav === 'posts' && 'active activeNavIndicator'
          }`}
          onClick={() => {
            if (activeNav !== 'posts') {
              setActiveNav('posts');
              navigate('/user/posts');
            }
          }}
        >
          {activeNav === 'posts' && (
            <div className='activeNagigation d-flex align-items-center justify-content-end'>
              <img className='arrowHead' src={arrow} alt='arrow ' />
            </div>
          )}
          Posts
        </nav>
        <nav
          className={`navBarsStyle ${activeNav === 'gallery' && 'active'}`}
          onClick={() => {
            if (activeNav !== 'gallery') {
              setActiveNav('gallery');
              navigate('/user/gallery');
            }
          }}
        >
          {activeNav === 'gallery' && (
            <div className='activeNagigation d-flex align-items-center justify-content-end'>
              <img className='arrowHead' src={arrow} alt='arrow ' />
            </div>
          )}
          Gallery
        </nav>
        <nav
          className={`navBarsStyle ${activeNav === 'todo' && 'active'}`}
          onClick={() => {
            if (activeNav !== 'todo') {
              setActiveNav('todo');
              navigate('/user/todo');
            }
          }}
        >
          {activeNav === 'todo' && (
            <div className='activeNagigation d-flex align-items-center justify-content-end'>
              <img className='arrowHead' src={arrow} alt='arrow ' />
            </div>
          )}
          ToDo
        </nav>
      </div>
    </SideBarStyles>
  );
};

export default SideBar;
