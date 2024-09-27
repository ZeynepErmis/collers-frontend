import React from 'react';

import AppStore from '../../assets/AppStore.png';
import GooglePlay from '../../assets/GooglePlay.png';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#0F172A', zIndex: 1, position: 'relative' }}>
            {/* Grid container */}
            <div className="p-4 pb-0">
                {/* Section: Links */}
                <section>
                    <div className="row">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 ">
                            <h6 className="mb-4 fw-bold">Product</h6>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Pricing</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Overview</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Browse</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Accesibility</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Five</a>
                            </p>

                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="mb-4 fw-bold">Solutions</h6>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Brainstorming</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Ideation</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Wireframing</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Research</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Design</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="mb-4 fw-bold">Support</h6>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Contact Us</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Developers</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Documentation</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Integrations</a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">Reports</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="mb-4 fw-bold">Get the App</h6>
                            <p>
                                <a href="#" className="text-white text-decoration-none">
                                    <img src={AppStore} alt="Contact Us" style={{ width: '100px' }} />
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-white text-decoration-none">
                                    <img src={GooglePlay} alt="Contact Us" style={{ width: '100px' }} />
                                </a>
                            </p>
                            <p className='mt-5'>
                                <a href="#" className="text-white fw-bold text-decoration-none">Follow Us</a>
                            </p>
                            <p>
                                <a href="https://www.youtube.com" className="text-white text-decoration-none mx-2" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="https://www.facebook.com" className="text-white text-decoration-none mx-2" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.twitter.com" className="text-white text-decoration-none mx-2" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com" className="text-white text-decoration-none mx-2" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com" className="text-white text-decoration-none mx-2" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </p>

                        </div>
                    </div>
                </section>

                <hr className="my-3" />

                {/* Section: Copyright */}
                <section className="p-3 pt-0">
                    <div className="row d-flex align-items-center">
                        {/* Grid column */}
                        <div className="col-md-7 col-lg-8 text-center text-md-start">
                            <div className="p-3">
                                Collers © 2023 Copyright: All rights reserved
                            </div>
                        </div>
                        
                        {/* Grid column */}
                        <div className=" col-md-5 col-lg-4 ml-lg-0 space-between text-center text-md-end">
                            <a className="m-2 text-decoration-none text-white">
                                Terms
                            </a>
                            <a className=" m-2 text-decoration-none text-white">
                                Privacy
                            </a>
                            <a className="m-2 text-decoration-none text-white">
                                Contact
                            </a>
                            <a className="m-2 text-decoration-none text-white">
                                🌐 EN
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
