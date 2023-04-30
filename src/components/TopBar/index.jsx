import { TopBarStyles } from './styles';
const TopBar = ({ data }) => {
  console.log(data);
  return (
    <TopBarStyles>
      <div className='topBarContainer'>
        <div className='topbarHead'>Profile</div>
        <div>
          <img
            className='profilePicDiv me-3'
            src={data?.profilepicture}
            alt='profile'
          />
          <span>{data?.name}</span>
        </div>
      </div>
    </TopBarStyles>
  );
};

export default TopBar;
