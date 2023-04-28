import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
  const [data, setData] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location?.state) {
      setData(location.state.data);
    }
  }, [location]);
  console.log(data);
  return <div className='prifileConatiner'>UserProfile</div>;
};

export default UserProfile;
