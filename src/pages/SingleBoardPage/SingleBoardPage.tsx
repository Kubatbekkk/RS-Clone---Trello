import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function SingleBoardPage() {
  const { itemKey } = useParams();
  return (
    <div>
      <Container style={{ minHeight: '65px' }}>
        Single Board Page for itemKey:
        {' '}
        {itemKey}
      </Container>
    </div>
  );
}

export default SingleBoardPage;
