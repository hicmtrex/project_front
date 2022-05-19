import React, { useEffect } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import Loader from '../../../components/UI/loader';
import { getEpreuvesList } from '../../../store/epreuves/list-slice';
import { Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { myAxios } from '../../../utils/axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/help-api';

const EpreuvesTable = () => {
  const dispatch = useDispatch();
  const { epreuves, loading } = useSelector((state) => state.epreuvesList);
  const [refresh, setRefresh] = useState(false);

  const onDelete = (id) => {
    if (window.confirm('are you sure ?')) {
      myAxios
        .delete(`cexEpreuves/${id}`)
        .then((res) => {
          toast.success('la session a été supprimée');
          setRefresh((prev) => (prev = !prev));
        })
        .catch((e) => {
          toast.error(setError(e));
        });
    }
  };
  const columns = [
    {
      name: 'anneeDeb',
      label: 'anneeDeb',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'anneeFin',
      label: 'anneeFin',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'codeCl',
      label: 'codeCl',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'codeModule',
      label: 'codeModule',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'dsex',
      label: 'dsex',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'codeSalle1',
      label: 'codeSalle1',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'codeSalle2',
      label: 'codeSalle2',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'idSeance',
      label: 'idSeance',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'idSession',
      label: 'idSession',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'surv11',
      label: 'surv11',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'surv12',
      label: 'surv12',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'surv21',
      label: 'surv21',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'surv22',
      label: 'surv22',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'typeEpreuve',
      label: 'typeEpreuve',
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
              <Link
                to={`/epreuves-update/${epreuves[tableMeta.rowIndex].id}`}
                className='me-2 btn btn-sm btn-info text-white'
              >
                <FaEdit />
              </Link>
              <Button
                onClick={() => onDelete(epreuves[tableMeta.rowIndex].id)}
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
    print: false,
    rowHover: true,
    download: false,
    jumpToPage: true,
    selectableRowsOnClick: false,
    selectableRowsHideCheckboxes: true,
  };

  useEffect(() => {
    dispatch(getEpreuvesList());
  }, [dispatch, refresh]);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={<h1>liste des epreuves</h1>}
          data={epreuves}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default EpreuvesTable;
