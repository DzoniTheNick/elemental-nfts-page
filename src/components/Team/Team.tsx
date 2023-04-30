import React, { FC } from 'react';
import './Team.scss';

interface TeamProps {}

const Team = () => {
  return(
    <div className="Team">
      <div className="heading">
        <p>What are Elemental NFTs?</p>
      </div>
      <div className="container">
        <p>
          Elementals: Astrology NFTs features 256 unique hand-drawn digital collectibles presented by the renowned astrologer Jessica Adams in collaboration with artists Tintin Cooper and Anita Bacic. The team have come up with a unique concept that reflects the most basic building block of astrology — the 4 elements.
          <br /> <br />
          Elementals NFTs show Fire, Air, Earth and Water in a quirky, playful style in modern surroundings that reflect the way we interact and understand the elements today. 
          <br /> <br />
          One elusive NFT will appear once a person owns a special combination of 4 elements. At that moment, the super-rare “Aether” (also known as the “void” or “philosopher's stone”) will mysteriously enter the world and drop into the combination-holder's wallet.
        </p>
      </div>
    </div>
  );
};

export default Team;
