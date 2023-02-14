import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Board, { Lane } from 'react-trello-ts';
import { boardService } from 'src/services/board';

function SingleBoardPage() {
  const { itemKey } = useParams();
  const [board, setBoard] = useState<{ lanes: typeof Lane[] }>({
    lanes: [],
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await fetchBoard();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBoard = async () => {
    const data = (await boardService.getBoard(boardId() || '')).val();
    setBoard(prepareBoard(data));
  };

  const prepareBoard = (_board: { lanes: unknown }) => ({
    ..._board,
    lanes: (_board?.lanes || []).map((lane: { cards: unknown; }) => ({
      ...lane,
      cards: lane?.cards || [],
    })),
  });
  const boardId = (): string => itemKey || '';
  // const { updateBoard } = boardService;
  // const handleDataChange = async (data: { lanes: typeof Lane[] }) => updateBoard(boardId(), data);
  console.log(Array.isArray(board.lanes));
  if (loading) {
    return (
      <Container
        className="d-flex
                   justify-content-center
                   align-items-center gap-2"
        style={{ minHeight: '65vh' }}
      >
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }
  return (
    <Board
      className="pt-16 bg-blue-500 h-full"
      canAddLanes
      editable
      data={{
        lanes: board.lanes || [],
      }}
    />

  );
}

export default SingleBoardPage;
