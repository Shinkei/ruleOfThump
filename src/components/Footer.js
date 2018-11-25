import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import StyledFooter from './styledComponents/StyledFooter';

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