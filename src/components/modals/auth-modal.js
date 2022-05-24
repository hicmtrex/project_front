import React from 'react';
import { Container, Modal, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthModal = ({ handleClose, show, title, children }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='text-xl text-danger'>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container className='container__auth'>
          <Card className='card__auth'>
            <div className='text-center intro'>
              <img
                src='https://i.imgur.com/uNiv4bD.png'
                alt='img'
                width={160}
              />
              <span className='d-block account'>Don't have account yet?</span>
              <span className='contact'>
                Contact us at{' '}
                <Link to='#' className='mail'>
                  contact@esprit.com
                </Link>
                and <br /> we will take care of everything
              </span>
            </div>
            <div className='mt-4 text-center'>{children}</div>
          </Card>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
