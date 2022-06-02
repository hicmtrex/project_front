import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { Card, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDepartment } from '../../../store/department/department-list';
import DepartmentColumns from '../../../components/columns/department-columns';
import DepartmentForm from '../../../components/forms/department-form';
import Loader from '../../../components/UI/loader';
import Paginate from '../../../components/UI/paginate';
import { useEffect, useState } from 'react';

const DepartmentTable = () => {
  const { departments, loading } = useSelector((state) => state.departmentList);
  const { refresh: refreshCreate } = useSelector(
    (state) => state.createDepartment
  );
  const { refresh } = useSelector((state) => state.deleteDepartment);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleShowEdit = (id) => {
    setCurrentId(id);
    setShowEdit(true);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    dispatch(getAllDepartment());
  }, [dispatch, refreshCreate, refresh]);

  return (
    <DashboardLayout>
      <Card.Header className='card-header d-flex bg-dark  justify-content-between'>
        <h5 className='mb-0 text-white'>Liste des Department</h5>
        <h6>
          <Button
            onClick={handleShow}
            variant=''
            className='bg-red-600 text-white'
            size='sm'
          >
            Ajouter une Department
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
                <th scope='col'>Libelle dept</th>
                <th scope='col'>Code Pdpt</th>
                <th scope='col'>
                  <span className=''>Date Cr</span>
                </th>
                <th scope='col'>
                  <span className=''>Date dernier modif</span>
                </th>
                <th scope='col'>
                  <span className=''>Paramètre</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <DepartmentColumns
                  handleShowEdit={handleShowEdit}
                  department={department}
                  key={department.CODE_DEPT}
                  setCurrentId={setCurrentId}
                />
              ))}
            </tbody>
          </Table>
        </Card>
      )}
      <DepartmentForm show={show} handleClose={handleClose} />
      {/* <DepartmentEdit
        currentId={currentId}
        show={showEdit}
        handleClose={handleCloseEdit}
      /> */}
      <Paginate />
    </DashboardLayout>
  );
};

export default DepartmentTable;
