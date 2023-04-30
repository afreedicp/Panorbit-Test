import { useState } from 'react';
import { SideBarStyles } from './style';
const SideBar = () => {
  const [activeNav, setActiveNav] = useState('profile');
  console.log(activeNav);
  return (
    <SideBarStyles>
      <div className='sidebarContainer'>
        <nav
          className={`navBarsStyle ${activeNav === 'profile' && 'active '}`}
          onClick={() => setActiveNav('profile')}
        >
          {activeNav === 'profile' && <div className='activeNagigation'></div>}
          Profile
        </nav>
        <nav
          className={`navBarsStyle ${
            activeNav === 'posts' && 'active activeNavIndicator'
          }`}
          onClick={() => setActiveNav('posts')}
        >
          {activeNav === 'posts' && <div className='activeNagigation'></div>}
          Posts
        </nav>
        <nav
          className={`navBarsStyle ${activeNav === 'gallery' && 'active'}`}
          onClick={() => setActiveNav('gallery')}
        >
          {activeNav === 'gallery' && <div className='activeNagigation'></div>}
          Gallery
        </nav>
        <nav
          className={`navBarsStyle ${activeNav === 'todo' && 'active'}`}
          onClick={() => setActiveNav('todo')}
        >
          {activeNav === 'todo' && <div className='activeNagigation'></div>}
          ToDo
        </nav>
      </div>
    </SideBarStyles>
  );
};

export default SideBar;
