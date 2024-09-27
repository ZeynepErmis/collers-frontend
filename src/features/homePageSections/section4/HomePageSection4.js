import React from 'react';
import './homePageSection4.css';
import Button from 'react-bootstrap/Button';
import Check from '../../../assets/check.svg';
import Video from '../../../assets/video.png';
import DecoVideo from '../../../assets/decoVideo.png';

export const HomePageSection4 = () => {
    return (
        <section className="section-4 text-dark">

            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="box-container-s4 rounded-5 overflow-hidden mt-5 mb-5 d-flex flex-column flex-md-row">


                        <div className="col-md-6 mb-4 d-flex flex-column justify-content-center ps-5">
                            <div className='mb-4 mx-auto'>
                                <h1 className="fw-bold text-md-start text-center mb-4">Why join us</h1>
                                <ul className="list-unstyled">
                                    <li>
                                        <img src={Check} alt="Check icon" className="me-2" />
                                        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                    </li>
                                    <li>
                                        <img src={Check} alt="Check icon" className="me-2" />
                                        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                    </li>
                                    <li>
                                        <img src={Check} alt="Check icon" className="me-2" />
                                        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                                    </li>
                                </ul>
                                <Button className="me-3 custom-signup-btn mt-2">Sign up now</Button>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center position-relative"> {/* Sağ Taraf */}
                            <img src={Video} alt="Video" className="img-fluid" style={{ top: '0', left: '0' }} /> {/* Video Resmi */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
