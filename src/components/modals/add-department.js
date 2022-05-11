import React from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

const AddDepartment = ({ show, handleClose, children, title }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='text-xl text-danger'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={12}>{children}</Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default AddDepartment;
