// Libraries import
import React from 'react';

// Styling import
import './Header.scss';

// Components import

const Header = () => {
  return(
    <div className="Header">
      <div className="container">
        <div className="btn nfts">
          <p>NFTS</p>
        </div>
        <div className="btn elements">
          <p>ELEMENTS</p>
        </div>
        <div className="btn story">
          <p>STORY</p>
        </div>
        <div className="btn who">
          <p>WHO</p>
        </div>
        <div className="btn faqs">
          <p>FAQS</p>
        </div>
      </div>
    </div>
  );
};

export default Header;