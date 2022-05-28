import React, { useEffect } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import { getModulesList } from '../../../store/modules/list-slice';
import Loader from '../../../components/UI/loader';

const columns = [
  {
    name: 'codeModule',
    label: 'CodeModule',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'designation',
    label: 'Designation',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: '',
    label: 'Code Module',
    options: {
      filter: true,
      sort: false,
    },
  },
];

const ModulesTable = () => {
  const dispatch = useDispatch();
  const { modules, loading } = useSelector((state) => state.modulesList);

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

  useEffect(() => {
    dispatch(getModulesList());
  }, [dispatch]);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={<h1>liste des modules</h1>}
          data={modules}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default ModulesTable;
