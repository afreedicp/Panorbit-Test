import styled from '@emotion/styled';
export const SideBarStyles = styled.div`
  width: 19%;
  height: 80%;
  position: absolute;
  border-radius: 24px;
  background: linear-gradient(
    29deg,
    rgba(108, 68, 219, 0.9920343137254902) 5%,
    rgba(23, 75, 164, 0.9192051820728291) 70%
  );
  .sidebarContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .navBarsStyle {
    position: relative;
    padding: 25px 35px;
    text-align: start;
    font-size: 18px;
    letter-spacing: 0.1rem;
    opacity: 0.6;
    color: #fff;
    border-bottom: 1px solid #fff;
    :last-child {
      border-bottom: none;
    }
    .activeNagigation {
      position: absolute;
      top: 30%;
      right: 0%;
      border-radius: 45% 0 0 45%;
      height: 35px;
      width: 35px;
      background: #fff;
    }
  }
  .active {
    opacity: 1;
    font-weight: 600;
    border-bottom: 1px solid #fff8;
    ::before {
      content: '';
      width: 15px;
      height: 15px;
      border-radius: 50%;
      position: absolute;
      top: 10.2%;
      right: 0.2%;
      background: none;
      transform: rotate(0deg);
      box-shadow: 5px 5px 0 0 #fff;
    }
    ::after {
      content: '';
      width: 15px;
      height: 15px;
      border-radius: 50%;
      position: absolute;
      top: 76%;
      right: 0.2%;
      background: none;
      transform: rotate(270deg);
      box-shadow: 5px 5px 0 0 #fff;
    }
  }
`;
