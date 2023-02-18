import React from "react";
import TrelloCard from "./TrelloCard";
import { useDispatch } from "react-redux";
import { addCard } from "../reducers/boardsSlicer";

import type {Board} from "../reducers/boardsSlicer";

const TrelloList = ({ title, cards = [] }: Board) => {
    const dispatch = useDispatch();
    console.log(cards, 'trelloList')
    return (
        <div className="card-container">
            <h3>{title}</h3>
            {cards.map(card => (<TrelloCard content={card.text} />))}
            <button onClick={() => dispatch(addCard({ id: Date.now(), boardId: 0, text: null}))}>add card</button>
        </div>
    )
}



export default TrelloList;