import React from 'react';
import EmptyImage from 'src/components/Utils/EmptyImage/EmptyImage';
import { StyledHome } from './styles';

const Home = () => (
  <StyledHome>
    <EmptyImage
      emptyText1="You don't have any boards yet"
      emptyText2="Create a new board to get started"
      emptyBoard
    />
  </StyledHome>
);

export default Home;
