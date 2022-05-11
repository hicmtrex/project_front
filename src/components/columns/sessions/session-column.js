import React from 'react';

import { useDispatch } from 'react-redux';

const SessionColumns = ({ session }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{session.anneeDeb}</td>
      <td>{session.anneeFin}</td>
      <td>{session.classesCibles}</td>
      <td>{session.codeAnnulation}</td>
      <td>{session.dateAnnulsession}</td>
      <td>{session.dateCreationSession}</td>
      <td>{session.dateDeb}</td>
      <td>{session.dateFin}</td>
      <td>{session.dateModifSession}</td>
      <td>{session.libelleSession}</td>
      <td>{session.periode}</td>
      <td>{session.semestre}</td>
    </tr>
  );
};

export default SessionColumns;
