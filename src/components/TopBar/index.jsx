import { useState, useRef, useEffect } from 'react';
import ProfileDropDown from '../ProfileDropDown';
import { TopBarStyles } from './styles';
const TopBar = ({ data }) => {
  const [showUser, setShowUser] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowUser(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  console.log(showUser);
  return (
    <TopBarStyles>
      <div className='topBarContainer'>
        <div className='topbarHead'>Profile</div>
        <div className='profileContainer' ref={ref}>
          <img
            className='profilePicDiv me-3'
            src={data?.profilepicture}
            alt='profile'
            onClick={() => setShowUser(!showUser)}
          />
          {showUser && <ProfileDropDown />}
          <span>{data?.name}</span>
        </div>
      </div>
    </TopBarStyles>
  );
};

export default TopBar;
