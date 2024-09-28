import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Shopping cart icon
import './homePageSection3.css'; // Import your CSS file
import Button from 'react-bootstrap/Button'; // Import Bootstrap button
import SneakerSC33 from '../../../assets/sneakerSC33.png'; // Import sneaker image 1
import SneakerSC32 from '../../../assets/sneakerSC32.png'; // Import sneaker image 2
import SneakerSC31 from '../../../assets/sneakerSC31.png'; // Import sneaker image 3

export const HomePageSection3 = () => {
    return (
        <section className="section-3 text-white py-5"> {/* Main section with padding and white text */}
            <div className="container"> {/* Main container for the section */}
                {/* Header and Button section */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-4">
                    <h1 className="fw-bold">The best of the best</h1> {/* Section title */}
                    <Button className="custom-signupn-btn fw-bold">Sign up now</Button> {/* Sign-up button */}
                </div>

                {/* Section for product boxes */}
                <div className="box-section ">
                    <div className="row">
                        {/* Box 1 */}
                        <div className="col-md-4 mb-4"> {/* Column for the first box */}
                            <div className="box-container rounded-3 overflow-hidden box-shadow-custom"> {/* Custom box with rounded corners and shadow */}
                                <img src={SneakerSC31} alt="Product 1" className="img-fluid img-custom" /> {/* Sneaker image */}
                                <div className="p-3"> {/* Padding around content */}
                                    <h5 className="mb-2">Title</h5> {/* Title for the product */}
                                    <p className="small">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p> {/* Product description */}
                                    <Button className="custom-buy-btn mt-3"> {/* Buy Now button */}
                                        <FaShoppingCart className="me-2" /> Buy Now {/* Shopping cart icon */}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Box 2 */}
                        <div className="col-md-4 mb-4"> {/* Column for the second box */}
                            <div className="box-container rounded-3 overflow-hidden box-shadow-custom"> {/* Custom box with rounded corners and shadow */}
                                <img src={SneakerSC32} alt="Product 2" className="img-fluid img-custom" /> {/* Sneaker image */}
                                <div className="p-3"> {/* Padding around content */}
                                    <h5 className="mb-2">Title</h5> {/* Title for the product */}
                                    <p className="small">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p> {/* Product description */}
                                    <Button className="custom-buy-btn mt-3"> {/* Buy Now button */}
                                        <FaShoppingCart className="me-2" /> Buy Now {/* Shopping cart icon */}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="col-md-4 mb-4"> {/* Column for the third box */}
                            <div className="box-container rounded-3 overflow-hidden box-shadow-custom"> {/* Custom box with rounded corners and shadow */}
                                <img src={SneakerSC33} alt="Product 3" className="img-fluid img-custom" /> {/* Sneaker image */}
                                <div className="p-3"> {/* Padding around content */}
                                    <h5 className="mb-2">Title</h5> {/* Title for the product */}
                                    <p className="small">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p> {/* Product description */}
                                    <Button className="custom-buy-btn mt-3"> {/* Buy Now button */}
                                        <FaShoppingCart className="me-2" /> Buy Now {/* Shopping cart icon */}
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
