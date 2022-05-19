import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

import { useDispatch } from 'react-redux';

const SeanceColumns = ({ seance }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{seance.anneeDeb}</td>
      <td>{seance.anneeFin}</td>
      <td>{seance.classesCibles}</td>
      <td>{seance.codeAnnulation}</td>
      <td>{seance.dateCreationSeance}</td>
      <td>{seance.dateSeance}</td>
      <td>{seance.hDeb}</td>
      <td>{seance.idSeance}</td>
      <td>{seance.idSession}</td>
      <td>{seance.jour}</td>
      <td>{seance.seance}</td>
      <td>{seance.sessions}</td>
      <td>
        <Button size='sm'>Edit</Button>
        <Button size='sm' variant='danger' className='ms-2'>
          <FaTrash />
        </Button>
      </td>
    </tr>
  );
};

export default SeanceColumns;
