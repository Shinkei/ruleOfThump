import styled from 'styled-components';
import crowd from '../../assets/crowd.jpg';

const StyledApp = styled.div`
  margin-left: 12%;
  margin-right: 12%;
  margin-top:3%;

  .ad-container{
    display:grid;
    grid-template-columns: 3fr 10fr 1fr;
    background-color: #ebebeb;
    h5{
      font-size: 21px;
      margin-top: 14px;
      margin-bottom: 0;
    }
    h2{
      font-size: 38px;
      margin-top: 0;
      margin-bottom: 14px;
    }
    @media (max-width: 1583px) {
      h5{
        font-size: 17px;
      }
      h2{
        font-size: 30px;
      }
    }
    @media (max-width: 1070px) {
      h5{
        font-size: 14px;
      }
      h2{
        font-size: 25px;
      }
    }
  }

  .text{
    text-align: left;
    font-size: 20px;
    @media (max-width: 1583px) {
      font-size:15px;
    }
  }
  
  .x{
    font-size:24px;
  }

  .subtitle{
    text-align:left;
  }

  .votes-container{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:45px;
    @media (max-width: 1725px) {
      grid-template-columns: 1fr;
    }
  }

  .new-celebrity{
    background:linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${crowd});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity:0.3;
    display:grid;
    grid-template-columns: 4fr 1fr;
    margin-top:5%;
    @media (max-width: 1420px) {
      grid-template-columns: 3fr 2fr;
    }
  }

  .new-celebrity-text{
    opacity:1;
    h3 {
      color: #000;
      text-align:left;
      padding-left:3%;
      opacity:1;
      font-size:30px;
    }
  }

  .submit-name{
    background-color: rgb(255,255,255,0);
    border: none;
    padding-right: 35px;
    div{
      font-size:21px;
      border:solid;
      padding:10px;
    }
  }
`;

export default StyledApp;