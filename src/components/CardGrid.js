import React, { useState, useEffect } from 'react';
import uniqid from "uniqid";
import Card from './Card';
import AustriaFlag from '../images/Austria_flag.svg.png'
import DenmarkFlag from '../images/Denmark_flag.png'
import EstoniaFlag from '../images/Estonia_flag.svg.png'
import FranceFlag from '../images/France_flag.svg.png'
import GermanyFlag from '../images/Germany_flag.png'
import GreeceFlag from '../images/Greece_flag.svg.png'
import NorwayFlag from '../images/Norway_flag.png'
import PolandFlag from '../images/Poland_flag.svg.png'
import SpainFlag from '../images/Spain_flag.png'
import UKFlag from '../images/UK_flag.svg.png'
import ItalyFlag from '../images/Italy_flag.svg'
import NetherlandsFlag from '../images/Netherlands_flag.svg'

function createCards() {
    let cardArray = [];
    let cards = [
        Card(AustriaFlag, "Austria", "#e07a5f", uniqid()),
        Card(DenmarkFlag, "Denmark", "#f7b267", uniqid()),
        Card(EstoniaFlag, "Estonia", "#95b8d1", uniqid()),
        Card(FranceFlag, "France", "#77bfa3", uniqid()),
        Card(GermanyFlag, "Germany", "#fed9b7", uniqid()),
        Card(GreeceFlag, "Greece", "#e07a5f", uniqid()),
        Card(NorwayFlag, "Norwway", "#fcbf49", uniqid()),
        Card(PolandFlag, "Poland", "#5e503f", uniqid()),
        Card(SpainFlag, "Spain", "#ee6c4d", uniqid()),
        Card(UKFlag, "United Kingdom", "#77bfa3", uniqid()),
        Card(ItalyFlag, "Italy", "#d68c45", uniqid()),
        Card(NetherlandsFlag, "Netherlands", "#ffbf69", uniqid()),
    ];

    cards.forEach((card) => {
        cardArray.push(card);
    })

    return cardArray;
}

function shuffleArray(array) {
    let currentIndex = array.length;
    let randomIndex;

    //While there remain elemnts to shuffle
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //Reassign array values
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

//CardGrid Functional Components
const CardGrid = (props) => {
    const { currentScore, bestScore, setCurrentScore, setBestScore } = props;
    let [cardArray, setCardArry] = useState(createCards());
    let [pastTurns, setPastTurns] = useState([]);

    useEffect(() => {
        const whenCardClicked = (card) => {
            let currentCardID = card.id;

            //If card clicked hasn't yet been clicked, reshuffle cards, add card to pastTurns and  add a point to currentScore
            if (pastTurns.findIndex(turn => turn.id === currentCardID) === -1) {
                setPastTurns(pastTurns.concat(card));
                setCardArry(shuffleArray(cardArray));
                setCurrentScore(currentScore + 1);
            }

            //If card already clicked, update bestScore if beat score and reset currentScore and pastTurns
            else {
                if (currentScore > bestScore) {
                    setBestScore(currentScore);
                }
                setCurrentScore(0);
                setPastTurns([]);
            }
        };

        let cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                whenCardClicked(card);
            });
        })

        return () => {
            let cards = document.querySelectorAll('.card');
            cards.forEach((card) => {
                card.removeEventListener("click", () => {
                    whenCardClicked(card);
                });
            })
        }
    })

    return (
        <div className='card-grid'>
            {cardArray.map((card) => {
                return (
                    <div
                        className='card'
                        key={card.id}
                        id={card.id}
                        style={card.backgroundColor}
                    >
                        <img src={card.src} alt={card.title}></img>
                        <figcaption>{card.title}</figcaption>
                    </div>
                )
            })}
        </div>
    )
}

export default CardGrid;