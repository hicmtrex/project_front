import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { Card, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DepartmentForm from '../../../components/forms/department-form';
import Loader from '../../../components/UI/loader';
import DepartmentEdit from '../../../components/forms/edit/department-edit';
import SessionColumns from '../../../components/columns/sessions/session-column';
import { getSessionList } from '../../../store/sessions/list-session';
import MUIDataTable from 'mui-datatables';

const SessionTable = () => {
  const { sessions, loading } = useSelector((state) => state.listSession);

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

  const columns = [
    {
      name: 'anneeDeb',
      label: 'AnneeDeb',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'anneeFin',
      label: 'AnneeFin',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'classesCibles',
      label: 'ClassesCibles',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'codeAnnulation',
      label: 'CodeAnnu',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'dateAnnulsession',
      label: 'DateAnnu',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'dateCreationSession',
      label: 'DateCr',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'dateDeb',
      label: 'DateDeb',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'dateFin',
      label: 'DateFin',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'dateModifSession',
      label: 'DateModif',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'libelleSession',
      label: 'Libelle',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'periode',
      label: 'Periode',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'semestre',
      label: 'Semestre',
      options: {
        filter: true,
        sort: false,
      },
    },
    // {
    //   name: 'sessions',
    //   label: 'Sessions',
    //   options: {
    //     filter: true,
    //     sort: false,
    //   },
    // },
  ];

  const data = [
    { name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
    { name: 'John Walsh', company: 'Test Corp', city: 'Hartford', state: 'CT' },
    { name: 'Bob Herm', company: 'Test Corp', city: 'Tampa', state: 'FL' },
    {
      name: 'James Houston',
      company: 'Test Corp',
      city: 'Dallas',
      state: 'TX',
    },
  ];

  const options = {
    filterType: null,
  };

  useEffect(() => {
    dispatch(getSessionList());
  }, [dispatch]);
  console.log(sessions);
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
        <MUIDataTable
          title={'Employee List'}
          data={sessions}
          columns={columns}
          options={options}
        />
      )}
      <DepartmentForm show={show} handleClose={handleClose} />
      <DepartmentEdit
        currentId={currentId}
        show={showEdit}
        handleClose={handleCloseEdit}
      />
    </DashboardLayout>
  );
};

export default SessionTable;
