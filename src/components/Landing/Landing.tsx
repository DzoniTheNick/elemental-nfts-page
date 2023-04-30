// Libraries import
import React from 'react';

// Styling import
import './Landing.scss';
import logo from '../../res/png/elementals-logo.png';

// Components import


const Landing = () => {
  return(
    <div className="Landing">
      <div className="container">
        <p className="date">
          19 MAY 2023 / ASTROLOGY NFTS
        </p>
        <img src={logo} alt="Project logo" className="logo" />
        <p className="content">
          256 NFTS / 4 ELEMENTS / 1 MYSTERY
        </p>
      </div>
      <div className="btn-container">
        <div className="btn">
          <p>EARLY ACCESS</p>
        </div>  
      </div>
      <p id="notice">Early Registrants Receive Discounts</p>
    </div>
  );
}; 

export default Landing;