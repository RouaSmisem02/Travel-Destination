import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
import Tour from '../tours/tour/Tour';
function Home() {
  return (
    <div className="container">
      <div className="tours-section">
        <Tours />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}
export default Home;