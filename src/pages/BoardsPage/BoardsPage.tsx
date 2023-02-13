/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import {
  onValue,
} from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from 'src/contexts/AuthContext';
import userBoards from 'src/helpers/userBoards';
import useTitle from 'src/hooks/useTitle';

export default function BoardsPage() {
  useTitle('BoardsPage');
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [boards, setBoards] = useState({});

  console.log(loading, Array.isArray(boards));

  const objectToArray = (data: { [s: string]: unknown; } | ArrayLike<unknown>) => (!data
    ? []
    : Object.values(data).map((value, index) => ({
      ...value,
      key: Object.keys(data)[index],
    })));

  const fetchBoards = async () => {
    onValue(userBoards(currentUser), (snapshot) => {
      if (!snapshot) {
        return;
      }
      setBoards(objectToArray(snapshot.val() || {}));
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      await fetchBoards();
    })();
  }, []);

  return (
    <Container>
      <h1>BoardsPage</h1>
      <div>
        <input type="text" />
        <button type='button'>Add</button>

      </div>
    </Container>
  );
}
