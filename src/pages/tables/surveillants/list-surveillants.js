import React, { useEffect } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import MUIDataTable from 'mui-datatables';
import Loader from '../../../components/UI/loader';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSurveillantsList } from '../../../store/surveillants/list-slice';

const ListSurveillants = () => {
  const dispatch = useDispatch();
  const { surveillants, loading } = useSelector(
    (state) => state.listSurveillantList
  );

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
      name: 'chefDept',
      label: 'chefDept',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'codeDept',
      label: 'codeDept',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'disponibiliteSeances',
      label: 'Disponibilite',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'etat',
      label: 'etat',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'libGradeActuelle',
      label: 'libGradeActuelle',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'nomEns',
      label: 'nomEns',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'sexeEns',
      label: 'sexeEns',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'typeEns',
      label: 'typeEns',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'up',
      label: 'up',
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  useEffect(() => {
    dispatch(getSurveillantsList());
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
            {/* <Link to='/surveillants-affectation'>Affectation</Link> */}
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={
            <h2>
              <span> liste</span> des Surveillants
            </h2>
          }
          data={surveillants}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default ListSurveillants;
