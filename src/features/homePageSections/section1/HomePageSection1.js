import React from 'react';
import './homePageSection1.css';
import Button from 'react-bootstrap/Button';
import Sneaker from '../../../assets/sneaker.png';

export const HomePageSection1 = () => {
  return (
    <div className='section-1'>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left side content for the section */}
          <div className="col-md-7"> {/* Bootstrap class: col-md-7 - On medium and larger screens, this column takes 7 out of 12 available columns */}
            <div className="mb-4 mx-auto"> {/* mb-4: margin bottom, mx-auto: center horizontally */}
              {/* Main title of the section */}
              <h1 className="mb-4 fw-bold custom-title text-md-start text-center"> {/* fw-bold: bold font, text-md-start: left-aligned on medium and larger screens, text-center: center-aligned on smaller screens */}
                Collectible Sneakers
              </h1>
              {/* Description paragraph */}
              <p className="text-md-start text-center"> {/* Similar alignment as the title */}
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
              </p>
              <div className="button-group d-flex justify-content-md-start justify-content-center">
                {/* d-flex: flexbox container, justify-content-md-start: left-aligns content on medium and larger screens, justify-content-center: centers content on smaller screens */}
                {/* Button for signing up */}
                <Button className="me-3 custom-signup-btn">Sign up now</Button> {/* me-3: margin end to separate buttons */}

                {/* Button for watching a demo with an icon */}
                <Button className="custom-watch-btn">
                  <i className="bi bi-play-circle me-2"></i>Watch Demo {/* me-2: margin end for the icon */}
                </Button>
              </div>
            </div>
          </div>

          {/* Right side for the sneaker image */}
          <div className="col-md-5 d-flex justify-content-center align-items-center"> {/* col-md-5: On medium and larger screens, this column takes 5 out of 12 available columns; d-flex: flexbox container; justify-content-center: centers content horizontally; align-items-center: centers content vertically */}
            {/* Image displaying collectible sneakers */}
            <img src={Sneaker} alt="Collectible Sneakers" className="img-fluid" /> {/* img-fluid: makes the image responsive to the container size */}
          </div>
        </div>
      </div>
    </div>
  );
};
