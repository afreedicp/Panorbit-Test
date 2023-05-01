import styled from '@emotion/styled';
export const ProfileDropDownStyles = styled.div`
  position: absolute;
  top: 5rem;
  right: 25px;
  .dropDownContainer {
    border-radius: 16px;
    padding: 40px 20px;
    width: 300px;
    height: 380px;
    background: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .profilePicDiv {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .nameDiv {
    color: #444343;
  }
  .emailDiv {
    color: #746e6ed9;
  }
  .usersList {
    max-height: 150px;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px;
      height: 119px;
    }
    ::-webkit-scrollbar-thumb {
      background: #a6a6a8;
      border-radius: 25px;
    }
  }
`;
