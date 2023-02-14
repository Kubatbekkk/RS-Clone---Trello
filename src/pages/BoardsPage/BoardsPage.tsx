/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import { onValue } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { boardService } from 'src/services/board';
import useTitle from 'src/hooks/useTitle';
import BoardTitle from 'src/components/BoardTitle';
import { useNavigate } from 'react-router-dom';
import BoardModal from 'src/components/BoardModal';

export default function BoardsPage() {
  useTitle('BoardsPage');
  const [loading, setLoading] = useState<boolean>(false);
  const [boards, setBoards] = useState<{ title: string; key: string }>({});
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const objectToArray = (data: { title: string; key: string }) => (!data
    ? []
    : Object.values(data).map((value, index) => ({
      ...value,
      key: Object.keys(data)[index],
    })));

  const fetchBoards = async () => {
    onValue(boardService.userBoards(), (snapshot) => {
      if (!snapshot) {
        return;
      }
      setBoards(objectToArray(snapshot.val()) || {});
      setLoading(false);
    });
  };

  const addBoardd = async (_board: string) => {
    await boardService.addBoard(_board);
    setModalVisible(false);
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      await fetchBoards();
    })();
  }, []);
  if (loading) {
    return (
      <Container
        className="d-flex
                   justify-content-center
                   align-items-center gap-2"
        style={{ minHeight: '65vh' }}
      >
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="dark" />
      </Container>
    );
  }
  return (
    <Container style={{ minHeight: '65vh' }}>
      <h5 className="my-4">BoardsPage</h5>
      <div>
        <div className="d-flex mb-3 align-items-center">🧑 Personal Boards</div>
        <div className="d-flex gap-4 mt-2">
          {!boards.length ? (
            <p>No boards</p>
          ) : (
            boards.map((item) => (
              <BoardTitle
                key={item?.key}
                title={item?.title}
                handleBoardClick={() => navigate(`/boards/${item?.key}`)}
              />
            ))
          )}
          <BoardTitle title="Add new board" handleBoardClick={() => setModalVisible(true)} />
        </div>
        <BoardModal
          addBoard={addBoardd}
          closeModal={() => setModalVisible(false)}
          visible={modalVisible}
        />
      </div>
    </Container>
  );
}
