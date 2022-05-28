import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/UI/loader';
import { getSeanceList } from '../../../store/seance/list-seance';
import SeanceForm from '../../../components/forms/seance-form';
import MUIDataTable from 'mui-datatables';
import { Button, Card } from 'react-bootstrap';
import { myAxios } from '../../../utils/axios';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/help-api';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const SeanceTable = () => {
  const { seances, loading } = useSelector((state) => state.listSeance);
  const { refresh } = useSelector((state) => state.createSeance);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [reload, setReload] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const options = {
    filterType: 'dropdown',
    responsive: 'standard',
    rowHover: true,
    jumpToPage: true,
    selectableRowsOnClick: false,
    selectableRowsHideCheckboxes: true,
  };

  const columns = [
    {
      name: 'idSeance',
      label: 'Seance',
      options: {
        filter: true,
        sort: false,
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
      name: 'jour',
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: 'DateSeance',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              {new Date(
                seances[tableMeta.rowIndex].dateSeance
              ).toLocaleDateString('en')}
            </>
          );
        },
      },
    },
    {
      name: 'hDeb',
      label: 'heure Début',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              {new Date(seances[tableMeta.rowIndex].hDeb).toLocaleTimeString(
                'en'
              )}
            </>
          );
        },
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
              <Link
                to={`/seance-update/${seances[tableMeta.rowIndex].id}`}
                className='me-2 btn-primary btn-sm'
              >
                <FaEdit />
              </Link>
              <Button
                onClick={() => {
                  if (window.confirm('are you sure ?')) {
                    myAxios
                      .delete(`cexSeances/${seances[tableMeta.rowIndex].id}`)
                      .then((res) => {
                        toast.success('la seance a été supprimée');
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

  useEffect(() => {
    dispatch(getSeanceList());
  }, [dispatch, refresh, reload]);

  return (
    <DashboardLayout>
      <Card.Header className='d-flex  justify-content-between'>
        <h5 className='mb-0 text-white'></h5>
        <h6>
          <Button
            onClick={handleShow}
            variant=''
            className='bg-red-600 text-white'
            size='sm'
          >
            Ajouter une Seance
          </Button>
        </h6>
      </Card.Header>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={
            <h1>
              <span> liste</span> des Seances
            </h1>
          }
          data={seances}
          columns={columns}
          options={options}
        />
      )}
      <SeanceForm show={show} handleClose={handleClose} />
    </DashboardLayout>
  );
};

export default SeanceTable;
