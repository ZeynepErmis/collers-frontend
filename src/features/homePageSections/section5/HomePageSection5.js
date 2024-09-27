import React, { useState } from "react";
import LeftArrow from '../../../assets/leftArrow.svg';
import RightArrow from '../../../assets/rightArrow.svg';
import RectangleBackground from '../../../assets/rectangleBackground.png';

import './homePageSection5.css';


const cardData = [
    {
        id: 1,
        title: "Zoomerr",
        content: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus.",
        person: "Hellen Jummy",
        role: "Team Lead",
    },
    {
        id: 2,
        title: "SHELLS",
        content: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim.",
        person: "Hellena John",
        role: "Co-founder",
    },
    {
        id: 3,
        title: "ArtVenue",
        content: "A eget sed posuere dui risus habitasse mauris. Venentatis aliquet id.",
        person: "David Oshodi",
        role: "Manager",
    },
    {
        id: 4,
        title: "WAVE",
        content: "Magna volutpat massa integer pellentesque. Venatis aliquet id ultricies.",
        person: "Sarah Wilson",
        role: "Project Manager",
    },
    // Daha fazla kart eklenebilir...
];

export const HomePageSection5 = () => {
    const [cards, setCards] = useState(cardData);
    const cardsToShow = 3;

    // Sağa kaydırma işlemi
    const handleNext = () => {
        const firstCard = cards[0];
        const newCards = [...cards.slice(1), firstCard];
        setCards(newCards);
    };

    // Sola kaydırma işlemi
    const handlePrev = () => {
        const lastCard = cards[cards.length - 1];
        const newCards = [lastCard, ...cards.slice(0, -1)];
        setCards(newCards);
    };

    return (
        <div className="section-5 pt-5 pb-5">
            <div className="container mt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="align-items-start">
                            <h2 className="text-center mb-4 fw-bold">Because they love us</h2>
                        </div>
                        <div className="align-items-end">
                            <button className="btn" onClick={handlePrev}>
                                <img src={LeftArrow} alt="Previous" />
                            </button>
                            <button className="btn" onClick={handleNext}>
                                <img src={RightArrow} alt="Next" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="container-background">
                    sds
                </div> */}
            <div className="container ">
                

                <div className="d-flex justify-content-between align-items-center flex-column flex-md-row col-md-12">

                    <div className="card-slider d-flex">
                        {cards.slice(0, cardsToShow).map((card) => (
                            <div className="card p-4 mx-2" key={card.id} style={{ minWidth: "300px", borderRadius: "15px" }}>
                                <h5>{card.title}</h5>
                                <p>{card.content}</p>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={`https://via.placeholder.com/40`}
                                        alt={card.person}
                                        className="rounded-circle mr-3"
                                    />
                                    <div>
                                        <strong>{card.person}</strong>
                                        <p className="text-muted mb-0">{card.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSection5;
