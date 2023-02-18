import { createReducer } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from '@reduxjs/toolkit';

import {RootState} from './index';

interface Card {
    id: number;
    text: string | null;
}

export interface Board {
    title: string;
    id: number;
    cards: Card[]
}
const initialState: Board[] = [

    {
        title: "Board Name",
        id: 0,
        cards: [
        ]
    }
]


export const boardsSlicer = createSlice({
    name: "boards",
    initialState,
    reducers: {

        addCard(state, { payload }: PayloadAction<{ boardId: number } & Card>) {
            const board = state.find(board => board.id === payload.boardId);
            if (!board) {
                return;
            }
            board.cards = [...board.cards, payload]
            state = [...state, board]
        }
    }
})

export const {addCard} = boardsSlicer.actions;

export const getBoard = (state:RootState) => state.boards[0];
export default boardsSlicer.reducer;
