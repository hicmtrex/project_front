import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import {
  Card,
  Table,
  Button,
  Row,
  Col,
  FormSelect,
  FormControl,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDepartment } from '../../../store/department/department-list';
import DepartmentForm from '../../../components/forms/department-form';
import Loader from '../../../components/UI/loader';
import ModuleForm from '../../../components/forms/module-form';

const ModulesTable = () => {
  const { departments, loading } = useSelector((state) => state.departmentList);
  const { refresh: refreshCreate } = useSelector(
    (state) => state.createDepartment
  );
  const { refresh } = useSelector((state) => state.deleteDepartment);
  const dispatch = useDispatch();

  const [toggleModule, setToggleModule] = useState(false);
  const [toggleSeance, setToggleSeance] = useState(false);

  useEffect(() => {
    dispatch(getAllDepartment());
  }, [dispatch, refreshCreate, refresh]);
  console.log(toggleSeance);
  return (
    <DashboardLayout>
      <h1 className='mb-0'>Planification des épreuves</h1>
      <Row className='mt-5'>
        <Col md={6}>
          <Card className=' shadow border-0 mb-2'>
            <Card.Header className='card-header d-flex bg-dark justify-content-between align-items-center'>
              <h4 className='mb-0 text-white'>Modules</h4>
              <Button
                size='sm'
                variant='success'
                className='w-50'
                disabled={!toggleModule}
              >
                ajouter
              </Button>
            </Card.Header>
            <Table bordered hover responsive>
              <thead className='thead-light bg-red-600 text-white'>
                <tr>
                  <th scope='col'>Code module</th>
                  <th scope='col'>
                    <span className=''>libelle</span>
                  </th>
                  <th scope='col'>
                    <span className=''>nbclasse</span>
                  </th>
                  <th scope='col'>
                    <span className=''>idSeance</span>
                  </th>
                  <th scope='col'>
                    <span className=''>d_h epreuve</span>
                  </th>
                  <th scope='col'>
                    <span className=''>flag</span>
                  </th>
                  <th scope='col'> Chèque</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>fsf</td>
                  <td>hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td>Hello</td>
                  <td> Hello</td>
                  <td>
                    {' '}
                    <input
                      type='checkbox'
                      className='form-check-input h-6 w-6'
                      checked={toggleModule}
                      value={toggleModule}
                      onClick={() => {
                        if (toggleModule) {
                          setToggleModule(false);
                        } else {
                          setToggleModule(true);
                        }
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>

        <Col md={6}>
          <Card className=' shadow border-0 mb-2'>
            <Card.Header className='card-header d-flex bg-dark align-items-center  justify-content-between'>
              <h4 className='mb-0 text-white'>Séances</h4>
              <Button
                size='sm'
                variant='success'
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
        </Col>
      </Row>

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
      </Card>
    </DashboardLayout>
  );
};

export default ModulesTable;
