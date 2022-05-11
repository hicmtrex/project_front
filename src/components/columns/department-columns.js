import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteDepartment } from '../../store/department/delete-slice';

const DepartmentColumns = ({ department, handleShowEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = (departmentId) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteDepartment(departmentId));
    }
  };
  return (
    <tr>
      <td>{department.CODE_DEPT}</td>
      <td>{department.LIBELLE_DEPT}</td>
      <td>{department.DATE_CR}</td>
      <td>{department.DATE_DERNIER_MODIF}</td>
      <td>
        <Button
          onClick={() => handleShowEdit(department.id)}
          size='sm'
          variant='secondary'
        >
          Éditer
        </Button>

        <Button
          className='mx-2'
          onClick={() => handleDelete(department.id)}
          size='sm'
          variant='danger'
        >
          <FaTrash size={'1rem'} />
        </Button>
      </td>
    </tr>
  );
};

export default DepartmentColumns;
