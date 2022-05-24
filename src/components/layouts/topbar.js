import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Image, Navbar, Row } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import auth from '../../firebase/config';
import { userLogout } from '../../store/users/login-slice';

const Topbar = () => {
  const dispatch = useDispatch();

  const onLogout = async () => {
    await signOut(auth);
    dispatch(userLogout());
  };

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
                        src={
                          'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6'
                        }
                        className='avatar avatar- rounded-circle mb-2'
                      />
                      <span className='avatar-child avatar-badge bg-success' />
                    </div>
                  </Link>
                  <div
                    className='dropdown-menu dropdown-menu-end'
                    aria-labelledby='sidebarAvatar'
                  >
                    <Link to='/' className='dropdown-item'>
                      Profile
                    </Link>
                    <Link to='#' className='dropdown-item'>
                      Paramètres
                    </Link>
                    <Link
                      to='#'
                      className='dropdown-item'
                      onClick={() => onLogout()}
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
