import React from "react";
import '../styles/styles.css';
import { useState } from 'react';
import '../styles/styles.css';

export interface TrelloCard {
    content: string | null;
}

const TrelloCard = ({content}: TrelloCard) => {
    const [description, setDescription] = useState(content);
    const [isShowArea, changeShowArea] = useState(true);

    const showArea = () => {
        changeShowArea(false);
    }

    return (
    <div className="card">
        {isShowArea ? <input placeholder="To Do" autoFocus={true} onSubmit={showArea} onBlur={showArea} className="card__input" onChange={event => setDescription(event.target.value)} value={description || ""}/> 
        : <p className="card__content">{description}</p>}
    </div>
    )
}

export default TrelloCard;