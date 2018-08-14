import React from 'react';
// import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <div className="footerTopMenu">
          <div className="footerTopMenuItem">
            <a href="/reportBug">Terms of Use</a>
          </div>
          <div className="footerTopMenuItem">
            <a href="/reportBug">Privacy Policy</a>
          </div>
          <div className="footerTopMenuItem">
            <a href="/reportBug" className="footer-bug">Report a Bug</a>          </div>
          <div className="footerTopMenuItem">
            <a href="/reportBug">Contact Us</a>
          </div>
          <div className="footerTopMenuItem">
            <a href="/reportBug">Press</a>
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
