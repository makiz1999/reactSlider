import React, { useState } from 'react';
import slides from '../slides';
import Entry from './Entry';

const slideArr = slides;

function createEntry(details){
    return (
        <Entry
        key = {details.id}
        title={details.title}
        text={details.text}
        />
    );
    
}

function App(){
    const [card, changeCard] = useState(0);

    function nextCard() {
        var newCard = card + 1;
        if(newCard >= slideArr.length){
            newCard = 0;
        }
        changeCard(newCard);
    }

    function prevCard(){
        var newCard = card - 1;
        if(newCard < 0){
            newCard = slideArr.length-1;
        }
        changeCard(newCard);
    }

    return (
    <div className="container">
    <h1>SLIDER</h1>
    <button onClick={nextCard} className="arrow-right"><i className="fas fa-arrow-right"></i></button>
        <button onClick={prevCard} className="arrow-left"><i className="fas fa-arrow-left"></i></button>
        <div className="card">
        
        <div className="slide">{createEntry(slides[card])}</div>
        </div>
    </div>
    );
}

export default App;