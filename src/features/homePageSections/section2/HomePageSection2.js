import React from 'react';
import './homePageSection2.css'; // CSS dosyanızı ekleyin
import Trophy from '../../../assets/Trophy.png';
import Tv from '../../../assets/tv.png';
import Icon from '../../../assets/icon.png';

export const HomePageSection2 = () => {
    return (
        <div className="container">
            <div className="row">
                {/* Her kutu için 4 kolon genişliğinde ayarlanmış 3 kutu */}
                <div className="col-md-4 mb-4 mx-auto"> {/* mx-auto ile ortalama */}
                    <div className="custom-container text-md-start text-center">
                        <img src={Trophy} alt="Trophy" />
                        <h5 className="mt-3">Nibh viverra</h5>
                        <p className="small">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                    </div>
                </div>

                <div className="col-md-4 mb-4 mx-auto text-md-start text-center"> {/* mx-auto ile ortalama */}
                    <div className="custom-container text-md-start text-center">
                        <img src={Icon} alt="Trophy" className="img-fluid"/>
                        <h5 className="mt-3">Carsus amet</h5>
                        <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                    </div>
                </div>

                <div className="col-md-4 mb-4 mx-auto"> {/* mx-auto ile ortalama */}
                    <div className="custom-container text-md-start text-center">
                        <img src={Tv} alt="Trophy" />
                        <h5 className="mt-3">Ipsum fermentum</h5>
                        <p className="small">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
