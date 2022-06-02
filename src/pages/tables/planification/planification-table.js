import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { Card, Table, Button, Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/UI/loader';
import { getPlanificationList } from '../../../store/planification/list-slice';

const PlanificationTable = () => {
  const dispatch = useDispatch();
  const { planifications, loading } = useSelector(
    (state) => state.planificationSList
  );
  const [toggleModule, setToggleModule] = useState(false);
  const [editB, setEditB] = useState(true);

  useEffect(() => {
    dispatch(getPlanificationList());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <h1 className='mb-0'>Planification des épreuves</h1>
      <Row className='mt-5'>
        {loading ? (
          <Loader />
        ) : (
          <Col>
            <div className='card-header d-flex  justify-content-between align-items-center'>
              <h4 className='mb-0'></h4>
              <Button
                size='sm'
                variant={`${toggleModule ? 'success' : 'secondary'}`}
                className='w-50'
                disabled={!toggleModule}
              >
                ajouter
              </Button>
            </div>
            <Card className=' shadow border-0 mb-2'>
              <Table bordered hover responsive>
                <thead className='thead-light bg-red-600 text-white'>
                  <tr>
                    <th scope='col'>Code module</th>
                    <th scope='col'>
                      <span className=''>Designation</span>
                    </th>
                    <th scope='col'>
                      <span className=''>nbclasses</span>
                    </th>
                    <th scope='col'>
                      <span className=''>dsex</span>
                    </th>
                    <th scope='col'>
                      <span className=''>Type epreuve</span>
                    </th>
                    <th scope='col'>
                      <span className=''>Id Seance</span>
                    </th>
                    <th scope='col'> Date heure</th>
                    <th scope='col'> Flag</th>
                    <th scope='col'> Check</th>
                  </tr>
                </thead>
                <tbody>
                  {planifications.map((planification) => (
                    <tr key={planification.id}>
                      <td>
                        <input
                          value={planification.codeModule}
                          className=' w-24 '
                        />
                      </td>

                      <td onDoubleClick={() => setEditB(false)}>
                        {editB ? (
                          <span> {planification.designation}</span>
                        ) : (
                          <Form.Control
                            value={planification.designation}
                            size='sm'
                            className=' w-24'
                          />
                        )}
                      </td>
                      <td>{planification.nbclasses}</td>
                      <td>{planification.dsex}</td>
                      <td>{planification.typeepreuve}</td>
                      <td>{planification.dateHeure}</td>
                      <td>{planification.flag}</td>
                      <td>{planification.flag}</td>

                      <td>
                        <Button
                          onClick={() => setEditB(true)}
                          size='sm'
                          className='w-50'
                        >
                          ajouter
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        )}

        {/* <Col md={6}>
          <Card className=' shadow border-0 mb-2'>
            <Card.Header className='card-header d-flex align-items-center  justify-content-between'>
              <h4 className='mb-0 '>Séances</h4>
              <Button
                size='sm'
                variant={`${toggleSeance ? 'success' : 'secondary'}`}
                className='w-50'
                disabled={!toggleSeance}
              >
                ajouter
              </Button>
            </Card.Header>
            <Table bordered hover responsive>
              <thead className='thead-light bg-red-600 text-white'>
                <tr>
                  <th scope='col'>idSeance</th>
                  <th scope='col'>
                    <span className=''>jour</span>
                  </th>
                  <th scope='col'>
                    <span className=''>date</span>
                  </th>
                  <th scope='col'>
                    <span className=''>heur</span>
                  </th>
                  <th scope='col'>
                    <span className=''>nbseance</span>
                  </th>
                  <th scope='col'>
                    <span className=''>nbclasse</span>
                  </th>
                  <th scope='col'>
                    <span className=''>nbMaxClasse</span>
                  </th>
                  <th scope='col'> Chèque</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>
                    {' '}
                    <input
                      type='checkbox'
                      className='form-check-input h-6 w-6'
                      checked={toggleSeance}
                      value={toggleSeance}
                      onClick={() => {
                        if (toggleSeance) {
                          setToggleSeance(false);
                        } else {
                          setToggleSeance(true);
                        }
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col> */}
      </Row>
      {/* 
      <Card className='shadow border-0 mb-2 mt-10'>
        <Table bordered hover responsive>
          <thead className='thead-light bg-red-600 text-white'>
            <tr>
              <th scope='col'>codeClasse</th>
              <th scope='col'>
                <span className=''>nbModule</span>
              </th>
              <th scope='col'>
                <span className=''>nbModulePlasser</span>
              </th>
              <th scope='col'>lun 1</th>
              <th scope='col'>lun 2</th>
              <th scope='col'>lun 3</th>
              <th scope='col'>lun 4</th>
              <th scope='col'>mar 1</th>
              <th scope='col'>mar 2</th>
              <th scope='col'>mar 3</th>
              <th scope='col'>mar 4</th>
              <th scope='col'>mer 1</th>
              <th scope='col'>mer 2</th>
              <th scope='col'>mer 3</th>
              <th scope='col'>mer 4</th>
              <th scope='col'>jeu 1</th>
              <th scope='col'>jeu 2</th>
              <th scope='col'>jeu 3</th>
              <th scope='col'>jeu 4</th>
              <th scope='col'>ven 1</th>
              <th scope='col'>ven 2</th>
              <th scope='col'>ven 3</th>
              <th scope='col'>ven 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hello</td>
              <td>Hello</td>
              <td>Hello</td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
              <td>
                <input type='checkbox' className='form-check-input h-6 w-6' />
              </td>
            </tr>
          </tbody>
        </Table>
      </Card> */}
    </DashboardLayout>
  );
};

export default PlanificationTable;
