import styled from '@emotion/styled';
export const UserListStyles = styled.div`
  .userContainer {
    cursor: pointer;
    padding: 15px;
    border-bottom: 1px solid #746e6ed9;
    display: flex;
    overflow-x: hidden;
    align-items: center;
  }
  .reducedUserContainer {
    padding: 8px;
    .profilePicDiv {
      width: 40px;
      height: 40px;
    }
    .userName {
      margin-left: 12px;
      max-width: 93%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .userName {
    margin-left: 20px;
    color: #565555fa;
    font-size: 18px;
  }
  .onlineIndicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: green;
  }
`;
