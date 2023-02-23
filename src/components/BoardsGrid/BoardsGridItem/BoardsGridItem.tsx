/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { StyledBoardsGridItem } from './styles';

export interface ITask {
  boardId: string;
  name: string;
  description: string;
  status: 'todo' | 'doing' | 'done';
  id?: string;
  ownerId?: string;
  createdAt?: Date;
}

interface IBoardGridItem {
  id: string;
  name: string;
  tasks: {
    todos: ITask[] | undefined;
    done: ITask[] | undefined;
  };
}

const BoardsGridItem = () => (
  <StyledBoardsGridItem><h1>BoardsGridItem</h1></StyledBoardsGridItem>
);

export default BoardsGridItem;
