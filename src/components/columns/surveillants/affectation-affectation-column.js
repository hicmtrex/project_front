import React from 'react';
import { Button, FormSelect } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const AffectationSurveillantColumn = ({ salle }) => {
  return (
    <tr>
      <td>{salle?.CODE_DEPT}</td>
      <td>{salle?.LIBELLE_DEPT}</td>
      <td>{salle?.DATE_CR}</td>
      <td>{salle?.DATE_DERNIER_MODIF}</td>
      <td>{salle?.DATE_DERNIER_MODIF}</td>
      <td>{salle?.DATE_DERNIER_MODIF}</td>
      <td>{salle?.DATE_DERNIER_MODIF}</td>
      <td>{salle?.DATE_DERNIER_MODIF}</td>
      <td>{salle?.DATE_DERNIER_MODIF}</td>
      <td>{salle?.DATE_DERNIER_MODIF}</td>
      <td>{salle?.DATE_DERNIER_MODIF}</td>
      <td>
        <FormSelect size='sm'>
          <option value='Ecrit'>Ecrit</option>
          <option value='Orale'>Orale</option>
          <option value='Soutenances'>Soutenances</option>
        </FormSelect>
      </td>
    </tr>
  );
};

export default AffectationSurveillantColumn;
