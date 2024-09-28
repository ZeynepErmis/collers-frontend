import React from 'react'; 
import './homePageSection6.css';
import Pointer from '../../../assets/pointer.svg'; 
import Desktop from '../../../assets/Desktop.png';
import Desktop2 from '../../../assets/Desktop2.png'; 
import Picture from '../../../assets/Picture.png'; 
import Search from '../../../assets/search.png'; 
import Vector from '../../../assets/Vector.png'; 
import Rocket from '../../../assets/rocket.png'; 
import Screen from '../../../assets/screen.png'; 
import Podcast from '../../../assets/podcast.png'; 
import Settings from '../../../assets/settings-alt.png'; 

export const HomePageSection6 = () => {
    return (
        <div>
            <div className='py-5 container text-center text-md-start'> {/* Main container with padding */}
                <h1 className='mb-4 fw-bold'> {/* Section title */}
                    Grow your collection
                </h1>
                <p> {/* Section description */}
                    Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. 
                    Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. 
                    Et volutpat proin neque placerat at bibendum quam tellus.
                </p>
            </div>

            <div className='background-s6 '> {/* Background wrapper for the next section */}

                <div className='container  '> {/* Container for buttons and images */}
                    <div className='row '> {/* Bootstrap row for layout */}
                        <div className='col-lg-3 mt-2 text-center text-lg-start'> {/* Column for buttons, taking 3/12 space on large screens */}
                            {/* Each button is styled with custom-button class */}
                            <button className="custom-button mb-2"> {/* First button with search icon */}
                                <img src={Search} alt="Search icon" className="me-2" style={{ width: '20px', height: '20px' }} />
                                Bibendum tellus
                                <img src={Pointer} alt="Pointer icon" className="ms-1 pointer" />
                            </button>

                            <button className="custom-button mb-2"> {/* Second button with vector icon */}
                                <img src={Vector} alt="Vector icon" className="me-2" style={{ width: '20px', height: '20px' }} />
                                Cras eget
                                <img src={Pointer} alt="Pointer icon" className="ms-1 pointer" />
                            </button>

                            <button className="custom-button mb-2"> {/* Third button with rocket icon */}
                                <img src={Rocket} alt="Rocket icon" className="me-2" style={{ width: '20px', height: '20px' }} />
                                Dolor pharetra
                                <img src={Pointer} alt="Pointer icon" className="ms-1 pointer" />
                            </button>

                            <button className="custom-button mb-2"> {/* Fourth button with screen icon */}
                                <img src={Screen} alt="Screen icon" className="me-2" style={{ width: '20px', height: '20px' }} />
                                Amet, fringilla
                                <img src={Pointer} alt="Pointer icon" className="ms-1 pointer" />
                            </button>

                            <button className="custom-button mb-2"> {/* Fifth button with podcast icon */}
                                <img src={Podcast} alt="Podcast icon" className="me-2 " style={{ width: '20px', height: '20px' }} />
                                Amet nibh
                                <img src={Pointer} alt="Pointer icon" className="ms-1 pointer" />
                            </button>

                            <button className="custom-button mb-2"> {/* Sixth button with settings icon */}
                                <img src={Settings} alt="Settings icon" className="me-2" style={{ width: '20px', height: '20px' }} />
                                Sed velit
                                <img src={Pointer} alt="Pointer icon" className="ms-1 pointer" />
                            </button>
                        </div>

                        <div className='col-lg-9 position-relatives-s6 justify-content-center'> {/* Column for images, taking 9/12 space */}
                            {/* Images representing the desktop setup */}
                            <img src={Desktop} alt="Desktop" className="desktop img-fluid" /> {/* First desktop image */}
                            <img src={Desktop2} alt="Desktop 2" className="desktop2 img-fluid" /> {/* Second desktop image */}
                            <img src={Picture} alt="Shoes" className="picture img-fluid" /> {/* Additional picture image */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

