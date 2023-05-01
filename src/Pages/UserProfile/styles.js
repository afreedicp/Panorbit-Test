import styled from '@emotion/styled';
export const UserProfileStyles = styled.div`
  .prifileContainer {
    padding: 50px 40px;
    height: 100vh;
    width: 100%;
  }
  .profileContent {
    margin-top: 130px;
    margin-left: 25%;
    width: 72.5%;
    height: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-col-span-2 {
    grid-row: span 2;
  }
  .userNameDiv {
    font-size: 28px;
    font-weight: 600;
    color: #646464;
  }
  .userHeadDiv {
    border-top: 1px solid #b7b7b7;
    font-size: 24px;
    color: #b7b7b7;
  }
  .addressDiv {
    border-left: 1px solid #b7b7b7;
    padding: 20px;
  }
  .userDetailsDiv {
    padding: 0 80px;
  }
  .comapntDetailsDiv {
    padding: 0 40px;
  }
  .userAddressDiv {
    text-align: start;
    font-size: 24px;
    color: #b7b7b7;
  }
  .profilePicture {
    width: 40%;
    height: 40%;
    border-radius: 50%;
    object-fit: cover;
  }
  .detailsDiv {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-size: 22px;
    ul {
      padding: 0 5px;
    }
    .titles {
      color: #746e6ed9;
      text-align: end;
    }
    .values {
      font-weight: 600;
      color: #444343;
      text-align: start;
    }
  }
  .long-latDetailsDiv {
    span {
      color: #746e6ed9;
      .values {
        font-weight: 600;
        color: #444343;
      }
    }
  }
`;
