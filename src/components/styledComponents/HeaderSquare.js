import styled from 'styled-components';

const HeaderSquare = styled.div`
  width: 613px;
  margin-top: 12%;
  margin-left: 12%;
  background-color: #4c4c4c;
  opacity: 0.7;
  color: white;

  article{
    text-align: left;
    padding-top: 12px;
    padding-left: 34px;
  }

  h1{
    font-size: 70px;
    margin: 0;
  }

  h6{
    font-size: 19px;
    margin: 0;
    padding-top: 24px;
  }

  p{
    margin: 0;
    font-size: 24px;
    padding-right: 90px;
    padding-top: 18px;
  }

  a{
    color: white;
    text-decoration: none;
    border-bottom: 2px dotted #fff;
  }
  .more{
    display:grid;
    grid-template-columns: 1fr 10fr;
    span {
      padding-top: 23px;
      font-size: 23px;
    }
  }

  .button-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  button{
    font-size:25px;
    padding:20px;
    opacity:0.7;
    color:#ffffff;
    border:none;
  }
  .thumbsup{
    background-color: #2cbbb3;
  }
  .thumbsdown{
    background-color: #feb432;
  }
`;

export default HeaderSquare;