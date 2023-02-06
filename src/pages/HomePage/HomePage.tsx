import React from 'react';
import useTitle from 'src/hooks/useTitle';
import './styles.css';

export default function HomePage() {
  useTitle('HomePage');
  return (
    <main>
      <h1>HomePage</h1>
    </main>
  );
}
