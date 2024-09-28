import React, { useState, useEffect } from "react";
import LeftArrow from '../../../assets/leftArrow.svg';
import RightArrow from '../../../assets/rightArrow.svg';
import Zoomerr from '../../../assets/zoomerr.png';
import Sheels from '../../../assets/sheels.png';
import ArtVenue from '../../../assets/artVenue.png';
import './homePageSection5.css';
import Hellen from '../../../assets/hellen.jpeg';
import Hellena from '../../../assets/Hellena.jpeg';
import David from '../../../assets/David.jpeg';
import Sarah from '../../../assets/Sarah.jpeg';

// Array containing card data, each object represents a card with its properties
const cardData = [
    {
        id: 1,
        image: Zoomerr,
        content: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus.",
        person: "Hellen Jummy",
        role: "Team Lead",
        picture: Hellen,
    },
    {
        id: 2,
        image: Sheels,
        content: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim.",
        person: "Hellena John",
        role: "Co-founder",
        picture: Hellena,
    },
    {
        id: 3,
        image: ArtVenue,
        content: "A eget sed posuere dui risus habitasse mauris. Venentatis aliquet.",
        person: "David Oshodi",
        role: "Manager",
        picture: David,
    },
    {
        id: 4,
        image: Zoomerr,
        content: "Magna volutpat massa integer pellentesque. Venatis aliquet id ultricies.",
        person: "Sarah Wilson",
        role: "Project Manager",
        picture: Sarah,
    },
];

export const HomePageSection5 = () => {
    // State to manage the cards displayed in the slider
    const [cards, setCards] = useState(cardData); // Initialize cards state with cardData
    const [cardsToShow, setCardsToShow] = useState(3); // State for the number of cards to display on screen

    useEffect(() => {
        // Effect to adjust the number of cards shown based on the window size
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsToShow(1);  // Set to 1 card for small screens (mobile)
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setCardsToShow(2);  // Set to 2 cards for medium screens (tablet)
            } else {
                setCardsToShow(3);  // Set to 3 cards for large screens (desktop)
            }
        };

        window.addEventListener('resize', handleResize); // Add resize event listener
        handleResize(); // Call the resize handler to set the initial card count

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
        };
    }, []);

    // Function to handle the next button click
    const handleNext = () => {
        const firstCard = cards[0]; // Get the first card from the array
        const newCards = [...cards.slice(1), firstCard]; // Move the first card to the end of the array
        setCards(newCards); // Update the state with the new card order
    };

    // Function to handle the previous button click
    const handlePrev = () => {
        const lastCard = cards[cards.length - 1]; // Get the last card from the array
        const newCards = [lastCard, ...cards.slice(0, -1)]; // Move the last card to the front of the array
        setCards(newCards); // Update the state with the new card order
    };

    return (
        <div className="section-5 pt-5 pb-5"> {/* Main section wrapper with padding */}
            <div className="container mt-5"> {/* Container for heading and buttons */}
                <div className="d-flex justify-content-between align-items-center"> {/* Flexbox for layout */}
                    <div className="align-items-start"> {/* Aligns heading */}
                        <h2 className="text-center mb-4 fw-bold">Because they love us</h2> {/* Section title */}
                    </div>
                    <div className="align-items-end"> {/* Aligns buttons */}
                        <button className="btn" onClick={handlePrev}> {/* Previous button */}
                            <img src={LeftArrow} alt="Previous" /> {/* Left arrow icon */}
                        </button>
                        <button className="btn" onClick={handleNext}> {/* Next button */}
                            <img src={RightArrow} alt="Next" /> {/* Right arrow icon */}
                        </button>
                    </div>
                </div>
            </div>
            <div className="container"> {/* Container for cards */}
                <div className="d-flex justify-content-between align-items-center flex-column flex-md-row col-md-12"> {/* Flexbox for cards layout */}

                    <div className=" d-flex">
                        {/* Flex container for card slider */}
                        {/* Map through the cards array and display cards based on the number to show */}
                        {cards.slice(0, cardsToShow).map((card) => (
                            <div className="card p-4 mx-2" key={card.id} style={{ minWidth: "300px", borderRadius: "15px" }}>
                                <img src={card.image} style={{ width: "50%" }} alt="company" /> {/* Card image */}
                                <p>{card.content}</p> {/* Card content text */}
                                <div className="d-flex align-items-center"> {/* Flexbox for person details */}
                                    <img
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%", // Make image circular
                                            objectFit: "cover", // Cover the area without distorting
                                            marginRight: "10px", // Space between image and text
                                        }}
                                        alt="profile pic"
                                        src={card.picture} // Profile picture of the person
                                        className="rounded-circle" // Additional class for rounded image
                                    />
                                    <div>
                                        {card.person} {/* Person's name */}
                                        <p className="text-muted mb-0">{card.role}</p> {/* Person's role */}
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
