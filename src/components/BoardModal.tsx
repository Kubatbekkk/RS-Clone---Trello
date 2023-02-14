import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface ModalProps {
  addBoard: (_board: string) => void
  closeModal: () => void
  visible: boolean
}

function BoardModal(props: ModalProps) {
  const { addBoard, closeModal, visible } = props;
  const [titleBoard, setTitleBoard] = useState<string>('');
  const [, setLoading] = useState<boolean>(true);

  const isEmptyText = (text: string) => !text || !text.trim();

  const handleCreateBoard = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (isEmptyText(titleBoard)) {
      return;
    }
    await addBoard(titleBoard);
    setTitleBoard('');
    setLoading(false);
  };

  return (
    <Modal show={visible} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create Board</Modal.Title>
      </Modal.Header>
      <>
        <Modal.Body>
          <Form onSubmit={handleCreateBoard}>
            <Form.Group className="mb-3">
              <Form.Label>Board Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Board Title"
                autoFocus
                onChange={(ev) => setTitleBoard(ev.target.value)}
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
            <div className='d-flex gap-4'>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button
                variant="primary"
                type='submit'
                onClick={closeModal}
                disabled={isEmptyText(titleBoard)}
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer />
      </>
    </Modal>
  );
}

export default BoardModal;
