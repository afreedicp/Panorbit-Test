import styled from '@emotion/styled';
export const ChatBoxStyles = styled.div`
  position: absolute;
  bottom: 0;
  right: 12rem;
  .chatboxContainer {
    padding: 0px 30px;
    align-items: center;
    height: 50px;
    border-radius: 16px 16px 0 0;
    background: #1010c3;
    width: 300px;
  }
  .msgIcon {
    width: 23px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(43deg)
      brightness(105%) contrast(104%);
  }
  .chatHeadDiv {
    color: #fff;
  }
  .usersList {
    background: #fff;
    max-height: 300px;
    border: 1px solid #1010c3;
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
