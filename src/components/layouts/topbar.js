import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Image, Navbar, Row } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../../pages/users/login/login';
import { userLogout } from '../../store/users/login-slice';
import AuthModal from '../modals/auth-modal';

const Topbar = () => {
  const { userInfo } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const { isLoading, error, loginWithRedirect, isAuthenticated, user, logout } =
    useAuth0();

  useEffect(() => {
    if (!isAuthenticated) loginWithRedirect();
  }, [isAuthenticated]);

  return (
    <header className='bg-red-600 border-bottom pt-3'>
      <Container fluid className='px-10 mb-3'>
        <div className='mb-npx'>
          <Row className=' align-items-center text-white'>
            <Col sm={6} className='col-12 mb-4 mb-sm-0 text-white'>
              <h1 className=' text-white'></h1>
            </Col>
            <div className='col-sm-6 col-12 text-sm-end '>
              <div className=' text-white'>
                <div className='dropdown '>
                  <Link
                    to='#'
                    id='sidebarAvatar'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <div className='avatar-parent-child'>
                      <Image
                        alt='Image Placeholder'
                        src={user?.picture}
                        className='avatar avatar- rounded-circle mb-2'
                      />
                      <span className='avatar-child avatar-badge bg-success' />
                    </div>
                  </Link>
                  <div
                    className='dropdown-menu dropdown-menu-end'
                    aria-labelledby='sidebarAvatar'
                  >
                    <a href='/' className='dropdown-item'>
                      Profile
                    </a>
                    <a href='#' className='dropdown-item'>
                      Paramètres
                    </a>
                    <Link
                      onClick={() => logout()}
                      to='#'
                      className='dropdown-item'
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default Topbar;
