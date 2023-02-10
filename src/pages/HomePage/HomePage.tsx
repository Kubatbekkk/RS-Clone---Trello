import React from 'react';
import useTitle from 'src/hooks/useTitle';
import { Container } from 'react-bootstrap';

export default function HomePage() {
  useTitle('HomePage');
  return (
    <Container>
      <h1>HomePage</h1>
    </Container>
  );
}
