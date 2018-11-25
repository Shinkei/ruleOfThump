import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import StyledFooter from './styledComponents/StyledFooter';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="left-footer">
        <a href="https://www.zemoga.com/">Terms and Conditions</a>
        <a href="https://www.zemoga.com/">Privacy Policy</a>
        <a href="https://www.zemoga.com/">Contact Us</a>
      </div>
      <div className="right-footer">
        <p>Fallow Us</p>
        <a href="https://www.facebook.com/Zemoga?fref=ts" className="icon-padding"><FontAwesomeIcon icon={faFacebook} className="icon-size"/></a>
        <a href="https://twitter.com/Zemoga" className="icon-padding"><FontAwesomeIcon icon={faTwitter} className="icon-size"/></a>
      </div>
    </StyledFooter>
  );
}

export default Footer;