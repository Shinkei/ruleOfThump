import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Logo from './styledComponents/Logo';
import Nav from './styledComponents/Nav';
import StyledHeader from './styledComponents/StyledHeader';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="bar">
          <Logo>
            Rule of Thumb.
          </Logo>
          <Nav>
            <a href="/">Past Trials</a>
            <a href="/">How It Works</a>
            <a href="/">Log In / Sign Up</a>
            <a href="/"><FontAwesomeIcon icon={faSearch}/></a>
          </Nav>
        </div>
      </StyledHeader>
    </>
  );
}

export default Header;