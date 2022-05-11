import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { Card, Table, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DepartmentForm from '../../../components/forms/department-form';
import Loader from '../../../components/UI/loader';
import { getDispoSalles } from '../../../store/salles/dispoSalles-list';
import DispoSallesColumn from '../../../components/columns/dispoSalles-column';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SallesDisponibles = () => {
  const loading = null;
  const { dispoSalles } = useSelector((state) => state.dispoSalles);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getDispoSalles());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <ul className='nav ps-3'>
        <li className='nav-item '>
          <Link to='#' className='nav-link'>
            List salles
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='#' className='nav-link '>
            Disponibilite
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/salle-affectation' className='nav-link '>
            Affectation
          </Link>
        </li>
      </ul>
      <Card className=' shadow border-0 mb-2  rounded-0'>
        <Card.Header className='card-header d-flex bg-dark align-items-center  justify-content-between'>
          <h4 className='mb-0 text-white'> Les Salle disponible</h4>
          <div className=''>
            <div className='input-group position-relative'>
              <input
                type='email'
                class='form-control'
                placeholder='search'
                aria-label='email@example.com'
                aria-describedby=''
              />
              <Button className='input-group-text bg-red-600  btn-outline-white'>
                <FaSearch />
              </Button>
            </div>
            <span class='mt-2 valid-feedback'>Looks good!</span>
          </div>
        </Card.Header>
        <div className=' d-flex my-3 ps-3'>
          <Form.Group className='d-flex'>
            <Form.Label className='me-5 d-flex text-nowrap'>
              Année Universitaire
            </Form.Label>
            <Form.Select size={'sm'}>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
              <option value='2023'>2023</option>
              <option value='2023'>2024</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='d-flex ms-5'>
            <Form.Label className='me-5'>Session</Form.Label>
            <Form.Select size={'sm'}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Card>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Card className=' shadow border-0 mb-2 '>
            <Table striped bordered hover responsive>
              <thead className='thead-light  bg-red-600 text-white'>
                <tr>
                  <th scope='col'>bloc </th>
                  <th scope='col'>etage</th>
                  <th scope='col'>
                    <span className=''>salles</span>
                  </th>
                  <th scope='col'>
                    <span className=''>disponibilite</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {dispoSalles.map((salle) => (
                  <DispoSallesColumn salle={salle} key={salle.id} />
                ))}
              </tbody>
            </Table>
          </Card>
          <Button size='sm' variant='danger' className='mt-3 float-end mx-5'>
            Annuler
          </Button>
          <Button size='sm' variant='success' className='mt-3 float-end'>
            Enregistrer
          </Button>
        </>
      )}
      <DepartmentForm show={show} handleClose={handleClose} />
    </DashboardLayout>
  );
};

export default SallesDisponibles;
