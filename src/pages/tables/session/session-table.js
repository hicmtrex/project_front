import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/UI/loader';
import { getSessionList } from '../../../store/sessions/list-session';
import MUIDataTable from 'mui-datatables';
import { myAxios } from '../../../utils/axios';
import { setError } from '../../../utils/help-api';
import toast from 'react-hot-toast';
import { Button, Card } from 'react-bootstrap';
import SessionForm from '../../../components/forms/session-form';
import { FaEdit, FaTrash } from 'react-icons/fa';

const SessionTable = () => {
  const { sessions, loading } = useSelector((state) => state.listSession);
  const { refresh } = useSelector((state) => state.createSession);
  const [show, setShow] = useState(false);
  const [reload, setReload] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  const columns = [
    {
      name: 'AnneeDb',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <span>
              {new Date(
                sessions[tableMeta.rowIndex].anneeDeb
              ).toLocaleDateString('en')}
            </span>
          );
        },
      },
    },
    {
      name: 'AnneeFin',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <span>
              {new Date(
                sessions[tableMeta.rowIndex].anneeFin
              ).toLocaleDateString('en')}
            </span>
          );
        },
      },
    },
    {
      name: 'sessions',
      label: 'Sessions',
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
    {
      name: 'periode',
      label: 'Periode',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'libelleSession',
      label: 'LibelleSession',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Actions',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <Button className='me-2' size='sm'>
                <FaEdit />
              </Button>
              <Button
                onClick={() => {
                  if (window.confirm('are you sure ?')) {
                    myAxios
                      .delete(`cexSessions/${sessions[tableMeta.rowIndex].id}`)
                      .then((res) => {
                        toast.success('la session a été supprimée');
                        setReload((prev) => (prev = !prev));
                      })
                      .catch((e) => {
                        toast.error(setError(e));
                      });
                  }
                }}
                size='sm'
                variant='danger'
              >
                <FaTrash />
              </Button>
            </>
          );
        },
      },
    },
  ];
  const options = {
    filterType: 'dropdown',
    responsive: 'standard',
    rowHover: true,
    jumpToPage: true,
    selectableRowsOnClick: false,
    selectableRowsHideCheckboxes: true,
    onRowsDelete: (rowsDeleted, dataRows) => {
      const idsToDelete = rowsDeleted.data.map((d) => sessions[d.dataIndex].id); // array of all ids to to be deleted
    },
  };

  useEffect(() => {
    dispatch(getSessionList());
  }, [dispatch, refresh, reload]);

  return (
    <DashboardLayout>
      <Card.Header className='card-header d-flex  justify-content-between'>
        <h5 className='mb-0 text-white'></h5>
        <h6>
          <Button
            onClick={handleShow}
            variant=''
            className='bg-red-600 text-white'
            size='sm'
          >
            Ajouter une session
          </Button>
        </h6>
      </Card.Header>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={
            <h1>
              <span>liste</span> des session
            </h1>
          }
          data={sessions}
          columns={columns}
          options={options}
        />
      )}
      <SessionForm show={show} handleClose={handleClose} />
    </DashboardLayout>
  );
};

export default SessionTable;
