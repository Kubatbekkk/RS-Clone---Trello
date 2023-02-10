import React from 'react';
import { Container } from 'react-bootstrap';
import useTitle from 'src/hooks/useTitle';

export default function BoardsPage() {
  useTitle('BoardsPage');
  return (
    <Container>
      <h1>BoardsPage</h1>
    </Container>
  );
}
