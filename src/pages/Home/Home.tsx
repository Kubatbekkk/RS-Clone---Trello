/* eslint-disable max-len */
import React from 'react';
import BoardsGrid from 'src/components/BoardsGrid';
import BoardsGridItem from 'src/components/BoardsGrid/BoardsGridItem';
import EmptyImage from 'src/components/Utils/EmptyImage';
import { StyledHome } from './styles';

// const boards = [{
//   name: 'Project',
//   id: '12345678',
//   todos: [{
//     name: 'first', description: 'first', status: 'todo', boardId: '12345678', id: '12345678', ownerId: 'kubat', createdAt: new Date(),
//   }],
//   done: [{
//     name: 'second', description: 'second', status: 'done', boardId: '12345678', id: '12345678', ownerId: 'kubat', createdAt: new Date(),
//   }],
//   tasks: {
//     done: [{ name: 'first', description: 'first', status: 'done' }],
//     todo: [{ name: 'second', description: 'second', status: 'done' }],
//   },
// }];

const boards = [{
  name: 'Project',
  id: '12345678',
  todos: [{
    name: 'first', description: 'first', status: 'todo', boardId: '12345678', id: '12345678', ownerId: 'kubat', createdAt: new Date(),
  }],
  done: [{
    name: 'second', description: 'second', status: 'done', boardId: '12345678', id: '12345678', ownerId: 'kubat', createdAt: new Date(),
  }],
  tasks: {
    done: [{ name: 'first', description: 'first', status: 'done' }],
    todo: [{ name: 'second', description: 'second', status: 'todo' }],
  },
}];

const Home = () => (
  <StyledHome>
    {!boards || boards.length < 1 ? (
      <EmptyImage
        emptyText1="You don't have any boards"
        emptyText2="Create your new board"
        emptyBoard
      />
    ) : (
      // @ts-ignore
      <BoardsGrid>
        <>
          {boards.map((board) => (
            <BoardsGridItem key={board.id} />
          ))}
        </>
      </BoardsGrid>
    )}
  </StyledHome>
);

export default Home;
