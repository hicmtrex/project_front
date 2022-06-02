import React, { useEffect } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import { getAllClasses } from '../../../store/classes/list-slice';
import Loader from '../../../components/UI/loader';

const ClassesTable = () => {
  const dispatch = useDispatch();
  const { classes, loading } = useSelector((state) => state.classesList);

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
      name: 'codeCl',
      label: 'CodeCl',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'filiere',
      label: 'Filiere',
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  useEffect(() => {
    dispatch(getAllClasses());
  }, [dispatch]);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={
            <h1>
              <span className=''> liste</span> des classes
            </h1>
          }
          data={classes}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default ClassesTable;
