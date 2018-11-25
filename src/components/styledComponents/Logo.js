import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 35px;
  padding-left: 93%;
  position: relative;
  width: 235px;

  a {
    padding: 0.5rem 1rem;
    color: white;
  }

  @media (max-width: 1300px) {
    text-align: center;
    padding-left:40%;
  }
`;

export default Logo;