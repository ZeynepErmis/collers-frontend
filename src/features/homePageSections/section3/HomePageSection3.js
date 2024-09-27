import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Alışveriş sepeti ikonu için
import './homePageSection3.css'; // CSS dosyanızı ekleyin
import Button from 'react-bootstrap/Button';
import SneakerSC33 from '../../../assets/sneakerSC33.png';
import SneakerSC32 from '../../../assets/sneakerSC32.png';
import SneakerSC31 from '../../../assets/sneakerSC31.png';

export const HomePageSection3 = () => {
    return (
        <section className="section-3 text-white py-5">
            <div className="container">
                {/* Üstte Başlık ve Sağda Buton */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-4">
                    <h1 className="fw-bold">The best of the best</h1>
                    <Button className="custom-signupnow-btn fw-bold">Sign up now</Button>
                </div>
                {/* 3 Box Bölümü için yeni konteyner */}
                <div className="box-section ">
                    <div className="row row-background">
                        {/* Box 1 */}
                        <div className="col-md-4 mb-4 ">
                            <div className="box-container rounded-3 overflow-hidden box-shadow-custom"> {/* rounded-3: Yuvarlak köşeler, overflow-hidden: köşe taşıma */}
                                <img src={SneakerSC31} alt="Product 1" className="img-fluid img-custom" /> {/* img-custom sınıfı ile sıfır boşluk */}
                                <div className="p-3">
                                    <h5 className="mb-2">Title</h5>
                                    <p className="small">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                                    <Button className="custom-buy-btn mt-3">
                                        <FaShoppingCart className="me-2" /> Buy Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* Box 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="box-container rounded-3 overflow-hidden box-shadow-custom"> {/* rounded-3: Yuvarlak köşeler, overflow-hidden: köşe taşıma */}
                                <img src={SneakerSC32} alt="Product 1" className="img-fluid img-custom" /> {/* img-custom sınıfı ile sıfır boşluk */}
                                <div className="p-3">
                                    <h5 className="mb-2">Title</h5>
                                    <p className="small">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                                    <Button className="custom-buy-btn mt-3">
                                        <FaShoppingCart className="me-2" /> Buy Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* Box 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="box-container rounded-3 overflow-hidden box-shadow-custom"> {/* rounded-3: Yuvarlak köşeler, overflow-hidden: köşe taşıma */}
                                <img src={SneakerSC33} alt="Product 1" className="img-fluid img-custom" /> {/* img-custom sınıfı ile sıfır boşluk */}
                                <div className="p-3">
                                    <h5 className="mb-2">Title</h5>
                                    <p className="small">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                                    <Button className="custom-buy-btn mt-3">
                                        <FaShoppingCart className="me-2" /> Buy Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
