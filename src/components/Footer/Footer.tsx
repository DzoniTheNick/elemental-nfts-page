// Libraries import
import React from 'react';

// Styling import
import './Footer.scss';
import { AiOutlineTwitter } from 'react-icons/ai';

// Components import

const Footer = () => {
  return(
    <div className="Footer">
      <div className="container">
        <div className="copyright">
          <p>© 2023 Elementals: Astrology - Jessica Adams, Anita Bacic & Tintin Cooper</p>
        </div>
        <div className="res-container">
          <div className="social">
            <AiOutlineTwitter color='#FFFFFF' size='50' />
          </div>
          <div className="policy">
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;