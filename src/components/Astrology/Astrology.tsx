// Libraries import
import React from 'react';

// Styling import
import './Astrology.scss';
import air from '../../res/png/air-icon.png';
import earth from '../../res/png/earth-icon.png';
import fire from '../../res/png/fire-icon.png';
import water from '../../res/png/water-icon.png';

// Components import

const Astrology = () => {
  return(
    <div className="Astrology">
      <div className="heading">
        <p>The 4 elements in Astrology</p>
      </div>
      <div className="container">
        <div className="elements">
          <div className="element-card" id="air">
            <img src={air} id="element-img" alt="Astrology air element" />
            <p id="element-name">air</p>
            <p id="element-description">Associated with movement and breathing new life into situations.</p>
          </div>
          <div className="element-card" id="earth">
            <img src={earth} alt="Astrology earth element" />
            <p id="element-name">earth</p>
            <p id="element-description">Associated with productivity, a stabilising influence and reliability.</p>
          </div>
          <div className="element-card" id="fire">
            <img src={fire} alt="Astrology fire element" />
            <p id="element-name">fire</p>
            <p id="element-description">Associated with the qualities of energy, assertiveness and passion.</p>
          </div>
          <div className="element-card" id="water">
            <img src={water} alt="Astrology water element" />
            <p id="element-name">water</p>
            <p id="element-description">Associated with the qualities of emotion, immersion and intuition.</p>
          </div>
        </div>
        <div className="description">
          <p>
            The Elements are also known as Triplicities, because they contain three zodiac signs each, the Elements show the nature of the signs, referring to the natural world. This aspect of astrology comes from Ancient Greece. 
            <br />
            <br />
            The Sun Signs are compatible with each other when they are in complementary elements. Fire and Fire. Fire and Air. Earth and Earth. Earth and Water. Air and Air. Air and Fire. Water and Water. Water and Earth.
          </p>
        </div>
        <div className="elements-descriptions">
          <div className="element">
            <p className="element-heading">
              <br />
              <br />
              FIRE / ARIES, LEO, SAGITTARIUS
            </p>
            <p className="element-content">
              Fire releases heat and light. Fire signs are warm and welcoming. Aries, Leo and Sagittarius also shed light on situations and illuminate them. Fire sign people can become intense. Too hot to handle. They convert (cook) raw materials into results which are changed forever. Fire signs transform. They are creative. They can also destroy. In the Smith-Waite Tarot, fire is represented by the Wands suit. Fire signs are brought to life by Air signs – Gemini, Libra, Aquarius and expand through them. Water signs can work against them – Cancer, Scorpio, Pisces. 
            </p>
          </div>
          <div className="element">
            <p className="element-heading">
              <br />
              EARTH / TAURUS, VIRGO, CAPRICORN
            </p>
            <p className="element-content">
              Earth is heavy and grounding. Earth signs are productive. They stabilise situations which are going concerns, and growing concerns, as rich soil grows fruit and vegetables, herbs, flowers and trees. Taurus, Virgo and Capricorn are down-to-earth. In the Smith-Waite Tarot, earth is represented by the Pentacles suit, which shows gold coins. The earth signs contain, hold and support the water signs – Cancer, Scorpio, Pisces. They can work against the fire signs – Aries, Leo, Sagittarius. The earth signs are deep and have many layers.
            </p>
          </div>
          <div className="element">
            <p className="element-heading">
              <br />
              AIR / GEMINI, LIBRA, AQUARIUS
            </p>
            <p className="element-content">
              Air is mobile. It moves. Air signs shift ideas and discussion. Gemini, Libra and Aquarius are a breath of fresh air. They breathe new life into situations. They can also whip up storms and hurricanes. Air signs make waves with the water signs – Cancer, Scorpio, Pisces. They can scatter them. They can uproot the earth signs – Taurus, Virgo, Capricorn. Air signs feed the fire signs – Aries, Leo, Sagittarius. They change direction all the time and are in constant motion. Air signs sway opinion. In Tarot, Air is shown by the Swords suit.
            </p>
          </div>
          <div className="element">
            <p className="element-heading">
              <br />
              WATER / CANCER, SCORPIO, PISCES
            </p>
            <p className="element-content">
              Water signs are emotional. They easily cry tears of joy or sadness. They have no boundaries, like the ocean, and merge with their partners, friends and relatives. When two water signs are in a sexual relationship, a solutio occurs. This is an old alchemical term for immersion. The water signs can feel all at sea and need the earth signs – Taurus, Virgo and Capricorn – to anchor them. They do not live in the real world. They live in their alternative world. In the Tarot, water signs are shown by the suit of Cups. 
            </p>
          </div>
        </div>
        <div className="less">
          <p>
            Show less
          </p>
        </div>
      </div>
    </div>
  );
};

export default Astrology;
