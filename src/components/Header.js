import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { toast } from 'react-toastify';
import Logo from './styledComponents/Logo';
import Nav from './styledComponents/Nav';
import StyledHeader from './styledComponents/StyledHeader';

class Header extends React.Component {

  handleLogin(){
    toast.error("Login doesn't work yet", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000 
    });
  }

  handleSearch(){
    toast.warn("We don't have enough celebrities", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000 
    });
  }

  render(){
    return (
      <>
        <StyledHeader>
          <div className="bar">
            <Logo>
              Rule of Thumb.
            </Logo>
            <Nav>
              <a href="#pastTrial">Past Trials</a>
              <a href="#howItWork">How It Works</a>
              <a onClick={this.handleLogin}>Log In / Sign Up</a>
              <a onClick={this.handleSearch}><FontAwesomeIcon icon={faSearch}/></a>
            </Nav>
          </div>
        </StyledHeader>
      </>
    );
  }
}

export default Header;