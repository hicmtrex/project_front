import React from 'react';

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
