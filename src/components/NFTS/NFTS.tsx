// Libraries import
import React from 'react';

// Styling import
import './NFTS.scss';
import fire from '../../res/png/fire-default.png';
import air from '../../res/png/air-default.png';
import earth from '../../res/png/earth-default.png';
import water from '../../res/png/water-default.png';

// Components import

const NFTs = () => {
  return(
    <div className="NFTs">
      <div className="heading">
        <p>THE NFTS</p>
      </div>
      <div className="container">
        <div className="nft-images">
          <img src={fire} alt="fire-nft" />
          <img src={air} alt="air-nft" />
          <img src={earth} alt="earth-nft" />
          <img src={water} alt="water-nft" />        
        </div>
        <div className="description">
          <p>
            Enjoy the Elementals, 256 NFTs – 64 of each element. Colours vary, each unique with surprising visitors popping up like a scurrilous scorpion, a lovely lion, funny fish, a bouncy bird and more. Limited edition – but some rarer than others – coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}

export default NFTs;