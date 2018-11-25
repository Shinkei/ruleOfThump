import styled from 'styled-components';

const StyledHeader = styled.header`
  color:white;
  background-image: linear-gradient(#000,#fff0);
  opacity: 0.8;
  font-family: lato;
  position: absolute;
  width:100%;
  padding-top: 30px;
  
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      justify-content: center;
    }
  }
`;

export default StyledHeader;