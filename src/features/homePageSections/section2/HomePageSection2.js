import React from 'react';
import './homePageSection2.css';
import Trophy from '../../../assets/Trophy.png';
import Tv from '../../../assets/tv.png';
import Icon from '../../../assets/icon.png';

export const HomePageSection2 = () => {
    return (
        <div className='section-2'>
            <div className="container"> {/* Main container for the section */}
                <div className="row"> {/* Bootstrap row to align columns */}
                    {/* Three boxes each taking 4 columns of width on medium screens and above */}
                    <div className="col-md-4 mb-4 mx-auto"> {/* col-md-4: takes 4 out of 12 columns on medium screens; mb-4: margin-bottom; mx-auto: centers horizontally */}
                        <div className="custom-container text-md-start text-center"> {/* Custom container with text alignment */}
                            <img src={Trophy} alt="Trophy" /> {/* Trophy image */}
                            <h5 className="mt-3">Nibh viverra</h5> {/* Title for the first box */}
                            <p className="small"> {/* Description with smaller font */}
                                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 mx-auto"> {/* Second box with similar structure */}
                        <div className="custom-container text-md-start text-center">
                            <img src={Icon} alt="Icon" className="img-fluid" /> {/* Icon image with responsive class */}
                            <h5 className="mt-3">Carsus amet</h5> {/* Title for the second box */}
                            <p> {/* Description for the second box */}
                                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 mx-auto"> {/* Third box with similar structure */}
                        <div className="custom-container text-md-start text-center">
                            <img src={Tv} alt="TV" /> {/* TV image */}
                            <h5 className="mt-3">Ipsum fermentum</h5> {/* Title for the third box */}
                            <p className="small"> {/* Description with smaller font */}
                                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
