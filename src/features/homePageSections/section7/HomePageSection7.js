import React from 'react';
import './homePageSection7.css';
import Shoe from '../../../assets/shoe.png';

export const HomePageSection7 = () => {
  return (
    <section className="map-section">
      <div className="map-background">
        {/* Circle containers indicating locations on the map */}
        <div className="circle-container" style={{ top: '180px', left: '150px' }}>
          <div className="circle"></div>
          <div className="info-box">
            <div className="image-container">
              <img src={Shoe} alt="Shoe" />
            </div>
            <div className="text-container">
              <p>Emma Simpson collected one pair of Cool Shoes.</p>
            </div>
          </div>
        </div>
        <div className="circle-container" style={{ top: '210px', left: '100px' }}>
          <div className="circle"></div>
          <div className="info-box">
            <img src={Shoe} alt="Shoe" />
            <p>Emma Simpson collected one pair of Cool Shoes.</p>
          </div>
        </div>
        <div className="circle-container" style={{ top: '500px', left: '300px' }}>
          <div className="circle"></div>
          <div className="info-box">
            <img src={Shoe} alt="Shoe" />
            <p>Emma Simpson collected one pair of Cool Shoes.</p>
          </div>
        </div>

        {/* Display showing the total number of shoes collected */}
        <div className="collected-info">
          <h1>11,658,467</h1>
          <p>Shoes Collected</p>
        </div>
      </div>
    </section>
  );
};