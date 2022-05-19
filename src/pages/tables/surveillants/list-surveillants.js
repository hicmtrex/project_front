import React, { useEffect } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import MUIDataTable from 'mui-datatables';
import Loader from '../../../components/UI/loader';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSalles } from '../../../store/salles/list-slice';

const ListSurveillants = () => {
  const dispatch = useDispatch();
  const { salles, loading } = useSelector((state) => state.salleList);

  const options = {
    filterType: 'dropdown',
    responsive: 'standard',
    print: false,
    rowHover: true,
    download: false,
    selectableRowsOnClick: false,
    selectableRowsHideCheckboxes: true,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
  };

  const columns = [
    {
      name: 'adresse',
      label: 'Adresse',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'bloc',
      label: 'Bloc',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'disponibilite',
      label: 'Disponibilite',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'etage',
      label: 'Etage',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'etat',
      label: 'Etat',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'nbChaisesRangee',
      label: 'NbChaisesRangee',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'nbRangees',
      label: 'NbRangees',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'salles',
      label: 'Salles',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'typeSalles',
      label: 'TypeSalles',
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  useEffect(() => {
    dispatch(getAllSalles());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <div id='topnavbar'>
        <div className='topnav mb-3'>
          <div className='d-flex px-1 '>
            {' '}
            <Link to='/surveillants'>List des surveillants</Link>
            <Link to='/surveillants-disponible'>
              Surveillants disponible
            </Link>{' '}
            <Link to='/surveillants-affectation'>Affectation</Link>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={
            <h2>
              <span className='text-danger'> liste</span> des Surveillants
            </h2>
          }
          data={salles}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default ListSurveillants;
