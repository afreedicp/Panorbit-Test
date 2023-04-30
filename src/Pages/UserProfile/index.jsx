import React, { useEffect, useState } from 'react';

import SideBar from '../../components/SideBar';
import { UserProfileStyles } from './styles';
import { useSelector } from 'react-redux';
import { selectAUser } from '../../Store/userSlice';
import TopBar from '../../components/TopBar';
import GoogleMap from '../../components/GoogleMap';

const UserProfile = () => {
  const user = useSelector(selectAUser);
  console.log(user);
  return (
    <UserProfileStyles>
      <div className='prifileContainer'>
        <SideBar /> <TopBar data={user} />
        <div className='profileContent'>
          <section className='userDetailsDiv'>
            <img className='profilePicture' src={user?.profilepicture} />
            <div className='userNameDiv'>{user?.name}</div>
            <div className='detailsDiv'>
              <div className='titles'>
                <ul>UserName</ul>
                <ul>e-mail</ul>
                <ul>Phone</ul>
                <ul>Website</ul>
              </div>
              <div>
                <ul>:</ul>
                <ul>:</ul>
                <ul>:</ul>
                <ul>:</ul>
              </div>
              <div className='values'>
                <ul>{user?.username}</ul>
                <ul>{user?.email}</ul>
                <ul>{user?.phone}</ul>
                <ul>{user?.website}</ul>
              </div>
            </div>
          </section>
          <section className='grid-col-span-2 addressDiv  d-flex justify-content-start'>
            <div className='userAddressDiv'>Address:</div>
            <div className='detailsDiv'>
              <div className='titles'>
                <ul>Street</ul>
                <ul>suite</ul>
                <ul>city</ul>
                <ul>zipcode</ul>
              </div>
              <div>
                <ul>:</ul>
                <ul>:</ul>
                <ul>:</ul>
                <ul>:</ul>
              </div>
              <div className='values'>
                <ul>{user?.address?.street}</ul>
                <ul>{user?.address?.suite}</ul>
                <ul>{user?.address?.city}</ul>
                <ul>{user?.address?.zipcode}</ul>
              </div>
              <GoogleMap
                lat={user?.address?.geo?.lat}
                lng={user?.address?.geo?.lng}
              />
            </div>
          </section>
          <section className='comapntDetailsDiv'>
            <div className='userHeadDiv'>Company</div>
            <div className='detailsDiv'>
              <div className='titles'>
                <ul>Name</ul>
                <ul>catchphrase</ul>
                <ul>bs</ul>
              </div>
              <div>
                <ul>:</ul>
                <ul>:</ul>
                <ul>:</ul>
              </div>
              <div className='values'>
                <ul>{user?.company?.name}</ul>
                <ul>{user?.company?.catchPhrase}</ul>
                <ul>{user?.company?.bs}</ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </UserProfileStyles>
  );
};

export default UserProfile;
