import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const DispoSallesColumn = ({ salle }) => {
  return (
    <tr>
      <td>{salle.bloc}</td>
      <td>{salle.etage}</td>
      <td>{salle.etage}</td>
      <td>
        <input
          type='checkbox'
          className='form-check-input h-6 w-6'
          value={salle.disponibilite}
          defaultChecked={salle.disponibilite}
        />
      </td>
    </tr>
  );
};

export default DispoSallesColumn;
