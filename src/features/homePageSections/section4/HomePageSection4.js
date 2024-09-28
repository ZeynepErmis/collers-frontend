import React from 'react';
import './homePageSection4.css'; // Import your CSS file
import Button from 'react-bootstrap/Button'; // Import Bootstrap button
import Check from '../../../assets/check.svg'; // Check icon image
import Video from '../../../assets/video.png'; // Video image

export const HomePageSection4 = () => {
    return (
        <section className="section-4 text-dark"> {/* Main section with dark text */}
            <div className="container py-5"> {/* Main container with vertical padding */}
                <div className="row align-items-center"> {/* Row to align items vertically */}
                    <div className="box-container-s4 rounded-5 overflow-hidden mt-5 mb-5 d-flex flex-column flex-md-row"> {/* Container for content with rounded corners */}
                        
                        <div className="col-md-6 mb-4 d-flex flex-column justify-content-center text-md-start"> {/* Left column for text */}
                            <div className="mb-4 mx-auto"> {/* Centered container for content */}
                                <h1 className="fw-bold mb-4 mt-4 text-center text-md-start">Why join us</h1> {/* Section title */}
                                <ul className="list-unstyled"> {/* Unstyled list for features */}
                                    <li> {/* List item with check icon */}
                                        <img src={Check} alt="Check icon" className="me-2" /> {/* Check icon */}
                                        Est et in pharetra magna adipiscing ornare aliquam. {/* Feature description */}
                                    </li>
                                    <li> {/* List item with check icon */}
                                        <img src={Check} alt="Check icon" className="me-2" /> {/* Check icon */}
                                        Tellus arcu sed consequat ac velit ut eu blandit. {/* Feature description */}
                                    </li>
                                    <li> {/* List item with check icon */}
                                        <img src={Check} alt="Check icon" className="me-2" /> {/* Check icon */}
                                        Ullamcorper ornare in et egestas dolor orci. {/* Feature description */}
                                    </li>
                                </ul>
                                {/* Center button for signup */}
                                <div className="d-flex justify-content-center justify-content-md-start"> 
                                    <Button className="custom-signup-btn mt-2">Sign up now</Button> {/* Sign-up button */}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center align-items-center position-relative"> {/* Right column for video */}
                            <img src={Video} alt="Video" className="img-fluid" /> {/* Video image */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
