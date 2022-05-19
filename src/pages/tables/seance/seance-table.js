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

const SeanceTable = () => {
  const { seances, loading } = useSelector((state) => state.listSeance);
  const { refresh } = useSelector((state) => state.createSeance);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const options = {
    filterType: 'dropdown',
    responsive: 'standard',
    print: false,
    rowHover: true,
    download: false,
    selectableRowsOnClick: true,
    selectableRowsHideCheckboxes: true,
    onRowsDelete: (rowsDeleted, dataRows) => {
      const idsToDelete = rowsDeleted.data.map((d) => seances[d.dataIndex].id); // array of all ids to to be deleted

      myAxios
        .delete(`/cexSeances/${idsToDelete[0]}`)
        .then((res) => {
          toast.success('la seance a été supprimée');
        })
        .catch((e) => {
          toast.error(setError(e));
        });
    },
  };

  const columns = [
    {
      name: 'idSeance',
      label: 'IdSeance',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'classesCibles',
      label: 'classesCibles',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'dateSeance',
      label: 'dateSeance',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'hDeb',
      label: 'hDeb',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'jour',
      label: 'jour',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'sessions',
      label: 'sessions',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'seance',
      label: 'seance',
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  useEffect(() => {
    dispatch(getSeanceList());
  }, [dispatch, refresh]);

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
              <span className='text-danger'> liste</span> des Seances
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
