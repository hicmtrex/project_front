import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { Card, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/UI/loader';
import SeanceColumns from '../../../components/columns/seance/seance-column';
import { getSeanceList } from '../../../store/seance/list-seance';
import Paginate from '../../../components/UI/paginate';

const SeanceTable = () => {
  const { seances, loading } = useSelector((state) => state.listSeance);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (id) => {
    setCurrentId(id);
    setShowEdit(true);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    dispatch(getSeanceList());
  }, [dispatch]);
  console.log(seances);
  return (
    <DashboardLayout>
      <Card.Header className='card-header d-flex bg-dark  justify-content-between'>
        <h4 className='mb-0 text-white'>Liste des Séance</h4>
        <h6>
          <Button
            onClick={handleShow}
            variant=''
            className='bg-red-600 text-white'
            size='sm'
          >
            Ajouter une Séance
          </Button>
        </h6>
      </Card.Header>
      {loading ? (
        <Loader />
      ) : (
        <Card className=' shadow border-0 mb-2'>
          <Table bordered hover responsive>
            <thead className='thead-light bg-red-600 text-white'>
              <tr>
                <th scope='col'>annee deb</th>
                <th scope='col'>annee fin</th>
                <th scope='col'>
                  <span className=''>classes cibles</span>
                </th>
                <th scope='col'>
                  <span className=''>code anuulation</span>
                </th>
                <th scope='col'>
                  <span className=''>date creation seance</span>
                </th>
                <th scope='col'>
                  <span className=''>data modif seance</span>
                </th>
                <th scope='col'>
                  <span className=''>datesence</span>
                </th>
                <th scope='col'>
                  <span className=''>hdeb</span>
                </th>
                <th scope='col'>idSession</th>
                <th scope='col'>jour</th>
                <th scope='col'>Seance</th>
                <th scope='col'>sessions</th>
              </tr>
            </thead>
            <tbody>
              {seances.map((seance) => (
                <SeanceColumns
                  handleShowEdit={handleShowEdit}
                  seance={seance}
                  key={seance?.CODE_DEPT}
                />
              ))}
            </tbody>
          </Table>
        </Card>
      )}
      {/* <DepartmentForm show={show} handleClose={handleClose} />
      <DepartmentEdit
        currentId={currentId}
        show={showEdit}
        handleClose={handleCloseEdit}
      /> */}
      <Paginate />
    </DashboardLayout>
  );
};

export default SeanceTable;
