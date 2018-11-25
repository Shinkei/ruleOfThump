import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 2%;
  color: #333333;
  border-top: dotted #333333;
  margin-top: 2%;
  padding-bottom: 2%;

  a{
    text-decoration: none;
    color:#333333;
    padding:19px 30px;
  }

  .left-footer {
    text-align:left;
  }

  .right-footer{
    text-align:right;
    margin-top:-13px;
  }

  .icon-size{
    font-size:33px;
  }

  .icon-padding{
    padding:13px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="left-footer">
        <a href="/">Terms and Conditions</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Contact Us</a>
      </div>
      <div className="right-footer">
        <a href="/">Fallow Us</a>
        <a href="/" className="icon-padding"><FontAwesomeIcon icon={faFacebook} className="icon-size"/></a>
        <a href="/" className="icon-padding"><FontAwesomeIcon icon={faTwitter} className="icon-size"/></a>
      </div>
    </StyledFooter>
  );
}

export default Footer;