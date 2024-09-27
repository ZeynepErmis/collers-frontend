import React from 'react'
import Button from 'react-bootstrap/Button';
import './homePageSection6.css';

import Check from '../../../assets/check.svg';
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
            <div className='container'>
                <div className='py-5'>
                    <h1 className='mb-4 fw-bold'>
                        Grow your collection
                    </h1>
                    <p>Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                    </p>
                </div>
                <div className='row'>
                    <div className='col-lg-3 btn-group-vertical'>
                        <button className="custom-button mb-2">
                            <img src={Search} alt="Check icon" className="me-2" style={{ width: '20px', height: '20px' }}/>
                            Bibendum tellus
                            <img src={Pointer} alt="Check icon" className="ms-1 pointer" />

                        </button>
                        <button className="custom-button mb-2">
                            <img src={Vector} alt="Check icon" className="me-2"style={{ width: '20px', height: '20px' }} />
                            Cras eget
                            <img src={Pointer} alt="Check icon" className="ms-1 pointer" />

                        </button>
                        <button className="custom-button mb-2">
                            <img src={Rocket} alt="Check icon" className="me-2" style={{ width: '20px', height: '20px' }}/>
                            Dolor pharetra
                            <img src={Pointer} alt="Check icon" className="ms-1 pointer" />

                        </button>
                        <button className="custom-button mb-2">
                            <img src={Screen} alt="Check icon" className="me-2" style={{ width: '20px', height: '20px' }}/>
                            Amet, fringilla
                            <img src={Pointer} alt="Check icon" className="ms-1 pointer" />

                        </button>
                        <button className="custom-button mb-2">
                            <img src={Podcast} alt="Check icon" className="me-2 " style={{ width: '20px', height: '20px' }}/>
                            Amet nibh
                            <img src={Pointer} alt="Check icon" className="ms-1 pointer" />

                        </button>
                        <button className="custom-button mb-2">
                            <img src={Settings} alt="Check icon" className="me-2"style={{ width: '20px', height: '20px' }}/>
                            Sed velit
                            <img src={Pointer} alt="Check icon" className="ms-1 pointer" />

                        </button>
                    </div>


                    <div className='col-lg-9 position-relative justify-content-center'>
                        <img src={Desktop} alt="Desktop" className="desktop img-fluid" />
                        <img src={Desktop2} alt="Desktop 2" className="desktop2 img-fluid" />
                        <img src={Picture} alt="Picture" className="picture img-fluid" />
                    </div>

                </div>
            </div>

        </div>

    )
}
