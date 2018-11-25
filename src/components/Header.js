import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components'
import NavStyled from './NavStyled';

const Logo = styled.h1`
  font-size: 35px;
  padding-left: 93%;
  position: relative;
  width: 235px;

  a {
    padding: 0.5rem 1rem;
    background: red;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }

  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

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
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }

`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="bar">
          <Logo>
            Rule of Thumb.
          </Logo>
          <NavStyled>
            <a href="/">Past Trials</a>
            <a href="/">How It Works</a>
            <a href="/">Log In / Sign Up</a>
            <a href="/"><FontAwesomeIcon icon="search"/></a>
          </NavStyled>
        </div>
      </StyledHeader>
    </>
  );
}

export default Header;