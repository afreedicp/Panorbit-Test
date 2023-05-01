import React from 'react';
import { useSelector } from 'react-redux';
import ChatBox from '../../components/ChatBox';
import GoogleMap from '../../components/GoogleMap';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import { selectAUser } from '../../Store/userSlice';
import { UserProfileStyles } from './styles';

const UserProfile = () => {
  const user = useSelector(selectAUser);
  return (
    <UserProfileStyles>
      <div className='prifileContainer'>
        <SideBar /> <TopBar data={user} />
        <div className='profileContent'>
          <section className='userDetailsDiv'>
            <img
              className='profilePicture'
              src={user?.profilepicture}
              alt='profile'
            />
            <div className='userNameDiv'>
              {user?.name ? user?.name : 'User'}
            </div>
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
                <ul>{user?.username ? user?.username : 'Unavailable'}</ul>
                <ul>{user?.email ? user?.email : 'Unavailable'}</ul>
                <ul>{user?.phone ? user?.phone : 'Unavailable'}</ul>
                <ul>{user?.website ? user?.website : 'Unavailable'}</ul>
              </div>
            </div>
          </section>
          <section className='grid-col-span-2 addressDiv  '>
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
                <ul>
                  {user?.address?.street
                    ? user?.address?.street
                    : 'Unavailable'}
                </ul>
                <ul>
                  {user?.address?.suite ? user?.address?.suite : 'Unavailable'}
                </ul>
                <ul>
                  {user?.address?.city ? user?.address?.city : 'Unavailable'}
                </ul>
                <ul>
                  {user?.address?.zipcode
                    ? user?.address?.zipcode
                    : 'Unavailable'}
                </ul>
              </div>
            </div>
            <GoogleMap
              lat={user?.address?.geo?.lat}
              lng={user?.address?.geo?.lng}
            />
            <div className='long-latDetailsDiv d-flex justify-content-end'>
              <span className='me-3'>
                Lat: <span className='values'>{user?.address?.geo?.lat} </span>
              </span>
              <span>
                Long: <span className='values'>{user?.address?.geo?.lng}</span>
              </span>
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
                <ul>
                  {user?.company?.name ? user?.company?.name : 'Unavailable'}
                </ul>
                <ul>
                  {user?.company?.catchPhrase
                    ? user?.company?.catchPhrase
                    : 'Unavailable'}
                </ul>
                <ul>{user?.company?.bs ? user?.company?.bs : 'Unavailable'}</ul>
              </div>
            </div>
          </section>
        </div>
        <ChatBox />
      </div>
    </UserProfileStyles>
  );
};

export default UserProfile;
