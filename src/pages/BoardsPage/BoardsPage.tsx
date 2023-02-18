import React from 'react';

import { Container } from 'react-bootstrap';

import useTitle from 'src/hooks/useTitle';

import TrelloList from '../../components/TrelloList';


import {useSelector } from 'react-redux';
import {getBoard} from '../../reducers/boardsSlicer';

function BoardsPage() {
  const data = useSelector(getBoard);
  // const data = useStore();
  // console.log(data.getState);
  console.log(data.cards);

  useTitle('BoardsPage');
  return (
    <Container>
      <TrelloList  {...data} />
    </Container>

  );
}




export default BoardsPage;