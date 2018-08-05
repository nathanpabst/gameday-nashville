import React from 'react';
// import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <div className="footerTopMenu">
          <div className="footerTopMenuItem">
            <a href="#">Terms of Use</a>
          </div>
          <div className="footerTopMenuItem">
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footerTopMenuItem">
            <a href="#">Report a Bug</a>
          </div>
          <div className="footerTopMenuItem">
            <a href="#">Contact Us</a>
          </div>
          <div className="footerTopMenuItem">
            <a href="#">Press</a>
          </div>
        </div>
        <div className="footerBottomMenu">
          <div className="footerBottomMenuItem">
            <p>&copy; 2018 Copyright placeholder</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
