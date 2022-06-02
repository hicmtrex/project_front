import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { Card, Table, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DepartmentForm from '../../../components/forms/department-form';
import Loader from '../../../components/UI/loader';
import { getDispoSalles } from '../../../store/salles/dispoSalles-list';
import DispoSallesColumn from '../../../components/columns/dispoSalles-column';
import { Link } from 'react-router-dom';

const SallesDisponibles = () => {
  const loading = null;
  const { dispoSalles } = useSelector((state) => state.dispoSalles);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    dispatch(getDispoSalles());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <div id='topnavbar'>
        <div className='topnav mb-3'>
          <div className='d-flex px-1 '>
            <Link className='active' to='/salle'>
              List des salle
            </Link>
            <Link to='/salles-disponible'>salle disponible</Link>
          </div>
        </div>
      </div>
      <Card className=' shadow border-0 mb-2  rounded-0'>
        <Card.Header className='card-header d-flex  align-items-center  justify-content-between'>
          <h4 className='mb-0 '> Les Salle disponible</h4>
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
