// Libraries import
import React from 'react';

// Styling import
import './App.scss';

// Components import
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing';
import NFTs from './components/NFTS/NFTS';
import Footer from './components/Footer/Footer'
import Astrology from './components/Astrology/Astrology';
import Explanation from './components/Explanation/Explanation';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <NFTs />
      <Astrology />
      <Explanation />
      <Footer />
    </div>
  );
}

export default App;
