import styled from '@emotion/styled';
import wave from '../../Assets/wave.svg';
export const LandingPageStyles = styled.div`
  .landingPageContainer {
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .backgroundDiv {
    border-radius: 0% 0% 20% 60%;
    height: 920px;
    width: 100%;

    background-size: cover;
    position: absolute;
    top: 0;
    background-image: url(${wave});
    filter: drop-shadow(0px 20px 0px #4f01c41f);
  }
  .accountListContainer {
    z-index: 4;
    background: #fff;
    border-radius: 24px;
    width: 35%;
    height: 60%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .topNav {
    display: flex;
    align-items: center;
    font-weight: 600;
    justify-content: center;
    color: #726f6ffa;
    font-size: 24px;
    border-radius: 24px 24px 0 0;
    height: 120px;
    background: #f6f6f6;
  }
  .usersListdiv {
    max-height: calc(100% - 120px);
    overflow-y: auto;
    padding: 0 30px;
    margin: 0 10px;
    ::-webkit-scrollbar {
      width: 6px;
      height: 119px;
    }
    ::-webkit-scrollbar-thumb {
      background: #a6a6a8;
      border-radius: 25px;
    }
  }
`;
