import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav, Image, Container, Button, Navbar } from 'react-bootstrap';
import { AiFillHome } from 'react-icons/ai';
import { FaUserTie } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { ImUserTie } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import auth from '../../firebase/config';
import { userLogout } from '../../store/users/login-slice';

const Sidebar = () => {
  const dispatch = useDispatch();

  const onLogout = async () => {
    await signOut(auth);
    dispatch(userLogout());
  };

  return (
    <Navbar
      expand='lg'
      variant='dark'
      className=' show navbar-vertical h-lg-screen  px-0 py-3  border-bottom border-bottom-lg-0 bg-red-600 '
      id='navbarVertical'
    >
      <Container fluid>
        <Button
          className='navbar-toggler ms-n2'
          data-bs-toggle='collapse'
          data-bs-target='#sidebarCollapse'
          aria-controls='sidebarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </Button>
        <Link
          className='navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-flex align-items-center'
          to='/'
        >
          <Image
            fluid
            src='/images/logo.png'
            alt='logo'
            style={{ height: '50px' }}
          />
        </Link>
        <div className='navbar-user d-lg-none'>
          <div className='dropdown'>
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
                  src='https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
                  className='avatar avatar- rounded-circle'
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
            </div>
          </div>{' '}
          <Link to='#' className='dropdown-item'>
            Facturation
          </Link>
          <hr className='dropdown-divider' />{' '}
          <button className='dropdown-item'>Se déconnecter</button>
        </div>

        <div className='collapse navbar-collapse' id='sidebarCollapse'>
          <ul className='navbar-nav'>
            <li className='nav-item  '>
              <Link className='nav-link p-5' to='/'>
                <AiFillHome className='me-2' size={'1.5rem'} /> Accueil
              </Link>
            </li>

            {/* <li className='nav-item '>
              <Link className='nav-link p-5' to='/department'>
                <FaUserTie className='me-2' size={'1.5rem'} /> Department
              </Link>
            </li> */}
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/session'>
                <GiTeacher className='me-2' size={'1.5rem'} /> Session
              </Link>
            </li>
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/seance'>
                <FaUserTie className='me-2' size={'1.5rem'} /> Séance
              </Link>
            </li>
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/modules'>
                <FaUserTie className='me-2' size={'1.5rem'} /> Modules
              </Link>
            </li>
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/classes'>
                <FaUserTie className='me-2' size={'1.5rem'} /> Classes
              </Link>
            </li>
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/epreuves'>
                <ImUserTie className='me-2' size={'1.5rem'} /> Epreuves
              </Link>
            </li>
            {/* <li className='nav-item '>
              <Link className='nav-link p-5' to='/planification'>
                <FaUserTie className='me-2' size={'1.5rem'} /> Planification
              </Link>
            </li> */}
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/salle'>
                <FaUserTie className='me-2' size={'1.5rem'} /> Salles
              </Link>
            </li>
            <li className='nav-item '>
              <Link className='nav-link p-5' to='/surveillants'>
                <ImUserTie className='me-2' size={'1.5rem'} /> Surveillants
              </Link>
            </li>
          </ul>

          <hr className='navbar-divider my-5 opacity-20' />

          <div className='' />
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/stages/profile'>
                <Nav.Link>
                  <i className='bi bi-person-square' /> Mon Compte
                </Nav.Link>
              </Link>
            </li>
            <li className='nav-item'>
              <Nav.Link onClick={() => dispatch(onLogout)}>
                <i className='bi bi-box-arrow-left' /> Se déconnecte
              </Nav.Link>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
