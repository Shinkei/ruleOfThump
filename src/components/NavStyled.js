import styled from 'styled-components';

const NavStyled = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 20px;
  padding-right:10%;
  a {
    color: white;
    text-decoration: none;
    padding: 19px 30px;
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 900;
    font-size: 20px;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid white;
    width: 100%;
    justify-content: center;
    font-size: 19px;
  }
`;

export default NavStyled;
