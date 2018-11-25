import styled from 'styled-components';

const StyledVoteSquare = styled.div`
  background-image: url(${props => props.image});
  width: 100%;
  height: 640px;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1725px) {
    width: 80%;
    height: 640px;
    margin-left:10%;
  }
  @media (max-width: 1288px) {
    width: 80%;
    height: 320px;
    margin-left:10%;
    min-width:480px;
  }

  .thumb-name{
    width: 50px;
    height: 50px;
    background-color:#1cbbb4;
    margin-top:11px;
    span {
      font-size: 35px;
      color: #fff;
    }
  }

  .name-container{
    display:grid;
    grid-template-columns: 1fr 8fr;
    margin-top:336px;
    h2{
      margin: 0;
      text-align: left;
      color: #fff;
      font-size: 50px;
    }
    @media (max-width: 1288px) {
      margin-top:16px;
    }
  }

  .lapse{
    color: #fff;
    margin: 0;
    text-align: left;
    padding-left: 80px;
    font-size: 14px;
  }

  .description{
    color: #fff;
    text-align: left;
    padding-left: 80px;
    font-size: 25px;
  }
  
  .thumb-button{
    color: #fff;
    border: none;
    margin: 10px;
    padding: 0;
    width: 50px;
    height: 50px;
    font-size: 28px;
    &:hover{
      border:solid;
    }
  }

  .thumbup-button{
    background-color: #1cbbb4;
  }

  .thumbdown-button{
    background-color: #ffad1d;
  }

  .button-container{
    text-align: left;
    padding-left: 65px;
    padding-bottom: 30px;
  }

  .vote-now-button{
    background: rgba(255, 255, 255, 0);
    border: solid;
    height: 50px;
    color: #fff;
    position: relative;
    top: -4px;
    margin-left: 13px;
    font-size: 20px;
    padding-left: 17px;
    padding-right: 17px;
  }

  .votes-percentage-container{
    display:grid;
  grid-template-columns: ${props => props.thumbUp}fr ${props => props.thumbDown}fr;
    height:45px;
  }

  .thumbup-percentage{
    color: #fff;
    text-align: left;
    padding-left: 12px;
    font-size: 26px;
    background-color: #1cbbb4;
    opacity: 0.7;
    padding-top:6px;
    min-width: 85px;
  }

  .thumbdown-percentage{
    color: #fff;
    text-align: right;
    padding-left: 12px;
    font-size: 26px;
    background-color: #ffad1d;
    opacity: 0.7;
    padding-top:6px;
    min-width: 85px;
  }

  .vote-again-button{
    margin-bottom: 10px;
    margin-top:10px;
  }
`;

export default StyledVoteSquare;