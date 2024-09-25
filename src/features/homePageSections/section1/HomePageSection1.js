import React from 'react';
import './homePageSection1.css';
import Button from 'react-bootstrap/Button';
import Sneaker from '../../../assets/sneaker.png';

export const HomePageSection1 = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-7"> {/* Sağ tarafta içerik */}
          <div className='custom-left-container mb-4 mx-auto'>
              <h1 className='mb-4 fw-bold custom-title text-md-start text-center'> {/* md-start büyük ekranlarda sola hizalı, küçük ekranlarda ortalı */}
              Collectible Sneakers
            </h1>
              <p className="text-md-start text-center"> {/* md-start büyük ekranlarda sola hizalı, küçük ekranlarda ortalı */}
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
              </p>
              <div className="button-group d-flex justify-content-md-start justify-content-center"> {/* md-start büyük ekranlarda sola hizalı, küçük ekranlarda ortalı */}
                {/* Sign up now Button */}
                <Button className="me-3 custom-signup-btn">Sign up now</Button>

                {/* Watch Demo Button with Icon */}
                <Button className="custom-watch-btn">
                  <i className="bi bi-play-circle me-2"></i>Watch Demo
                </Button></div>
          </div>
        </div>
        <div className="col-md-5 d-flex justify-content-center align-items-center"> {/* Sağ Taraf */}
          <img src={Sneaker} alt="Collectible Sneakers" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
