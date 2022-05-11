import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { Card, Table, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DepartmentForm from '../../../components/forms/department-form';
import Loader from '../../../components/UI/loader';
import { getDispoSalles } from '../../../store/salles/dispoSalles-list';

import DispoSurveColumn from '../../../components/columns/dispoSurve-column';
import { Link } from 'react-router-dom';
import AffectationSurveillantColumn from '../../../components/columns/surveillants/affectation-affectation-column';

const SurveillantAffectationTable = () => {
  const loading = null;
  const { dispoSalles } = useSelector((state) => state.dispoSalles);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navItems = [
    {
      name: 'Surveillants',
      url: '',
    },
    {
      name: 'Surveillants',
      url: '',
    },
    {
      name: 'Surveillants',
      url: '',
    },
  ];

  useEffect(() => {
    dispatch(getDispoSalles());
  }, [dispatch]);

  return (
    <DashboardLayout navItems={navItems}>
      <ul className='nav ps-3'>
        <li className='nav-item '>
          <Link to='/surveillants' className='nav-link '>
            List surveillants
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/surveillants' className='nav-link '>
            Disponibilite
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/surveillants-affectation' className='nav-link '>
            Affectation
          </Link>
        </li>
      </ul>
      <Card className=' shadow border-0 mb-2  rounded-0'>
        <Card.Header className='card-header d-flex bg-dark  justify-content-between'>
          <h4 className='mb-0 text-white'>
            Affectation des classes dans les salles
          </h4>
        </Card.Header>
        <div className=' d-flex my-3 align-items-center'>
          <Form.Group className='d-flex ps-3'>
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
      <Card className=' shadow border-0 mb-2'>
        <Table striped bordered hover responsive>
          <thead className='thead-light bg-red-600 text-white'>
            <tr>
              <th scope='col'>Id Epreuve </th>
              <th scope='col'>Code classe</th>
              <th scope='col'>
                <span className=''>Id Module</span>
              </th>
              <th scope='col'>
                <span>Module</span>
              </th>
              <th scope='col'>Id Séance</th>
              <th scope='col'>Code salle 1</th>
              <th scope='col'>Code salle 2</th>
              <th scope='col'>Surv11 Epreuve</th>
              <th scope='col'>Surv12 Epreuve</th>
              <th scope='col'>Surv21 Epreuve</th>
              <th scope='col'>Surv22 Epreuve</th>
              <th scope='col'>Type Epreuve</th>
            </tr>
          </thead>
          <tbody>
            {dispoSalles.map((salle) => (
              <AffectationSurveillantColumn salle={salle} key={salle.id} />
            ))}
          </tbody>
        </Table>
      </Card>
      <Button size='sm' variant='secondary' className='mt-3 float-end '>
        Annuler
      </Button>
      <Button size='sm' variant='secondary' className='mt-3  mx-2 float-end'>
        Éditer
      </Button>
      <Button size='sm' variant='success' className='mt-3 float-end'>
        Enregistrer
      </Button>

      <DepartmentForm show={show} handleClose={handleClose} />
    </DashboardLayout>
  );
};

export default SurveillantAffectationTable;
