import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-top: 2%;
  color: #333333;
  border-top: dotted #333333;
  margin-top: 2%;
  padding-bottom: 2%;

  @media (max-width: 1125px) {
      grid-template-columns: 1fr;
  }

  a{
    text-decoration: none;
    color:#333333;
    padding:19px;
  }

  .left-footer {
    text-align:left;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 1125px) {
      width:100%;
      text-align:center;
      grid-template-columns: 1fr;
    }
  }

  .right-footer{
    text-align:right;
    display:grid;
    grid-template-columns: 3fr 1fr 1fr;
    @media (max-width: 1125px) {
      text-align:center;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .icon-size{
    font-size:33px;
  }

  .icon-padding{
    padding:13px;
  }
`;

export default StyledFooter;