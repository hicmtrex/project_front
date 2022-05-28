import React, { useEffect } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import Loader from '../../../components/UI/loader';
import { getEpreuvesList } from '../../../store/epreuves/list-slice';
import { Button, Card } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { HiOutlineFolderAdd } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { myAxios } from '../../../utils/axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/help-api';
import { getAllSalles } from '../../../store/salles/list-slice';
import { getSeanceList } from '../../../store/seance/list-seance';
import { getSurveillantsList } from '../../../store/surveillants/list-slice';
import EpreuveForm from '../../../components/forms/epreuve-form';
import { getModulesList } from '../../../store/modules/list-slice';
import { saveEvent } from '../../../store/events/list-slice';
import { staticEvnts } from '../../calendar/events';

const EpreuvesTable = () => {
  const dispatch = useDispatch();
  const { epreuves, loading } = useSelector((state) => state.epreuvesList);
  const { salles } = useSelector((state) => state.salleList);
  const { seances } = useSelector((state) => state.listSeance);
  const { surveillants } = useSelector((state) => state.listSurveillantList);
  const { modules, loading: loadingModule } = useSelector(
    (state) => state.modulesList
  );

  const [refresh, setRefresh] = useState(false);
  const [showEp, setShow] = useState(false);
  const handleShowEp = () => setShow(true);
  const handleCloseEp = () => setShow(false);

  const [formData, setFormData] = useState({
    codeSalle1: '',
    codeSalle2: '',
    IdSeance: '',
    surv11: '',
    surv12: '',
    surv21: '',
    surv22: '',
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onAdd = (id, index) => {
    dispatch(saveEvent(staticEvnts));
    myAxios
      .put(`cexEpreuves/${id}`, {
        codeCl: epreuves[index].codeCl,
        codeModule: epreuves[index].codeModule,
        dsex: epreuves[index].dsex,
        idSession: epreuves[index].idSession,
        typeEpreuve: epreuves[index].typeEpreuve,
        anneeDeb: epreuves[index].anneeDeb,
        anneeFin: epreuves[index].anneeFin,
        codeSalle1: formData.codeSalle1,
        codeSalle2: formData.codeSalle2,
        surv11: formData.surv11,
        surv12: formData.surv12,
        surv21: formData.surv21,
        surv22: formData.surv22,
      })
      .then((res) => {
        toast.success('la epreuves a été ajouté');
        setRefresh((prev) => (prev = !prev));
      })
      .catch((e) => {
        toast.error(setError(e));
      });
  };

  const onDelete = (id) => {
    myAxios
      .delete(`cexEpreuves/${id}`)
      .then((res) => {
        toast.success('la session a été supprimée');
        setRefresh((prev) => (prev = !prev));
      })
      .catch((e) => {
        toast.error(setError(e));
      });
  };

  const columns = [
    {
      name: 'datedebut',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              {new Date(
                epreuves[tableMeta.rowIndex]?.anneeDeb
              ).toLocaleDateString('en')}
            </>
          );
        },
      },
    },
    {
      name: 'anneeFin',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              {new Date(
                epreuves[tableMeta.rowIndex]?.anneeFin
              ).toLocaleDateString('en')}
            </>
          );
        },
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
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <select className=' rounded' name='codeSalle1' onChange={onChange}>
              {salles.map((salle) => (
                <option value={salle?.id} key={salle?.id}>
                  {salle?.id}
                </option>
              ))}
            </select>
          );
        },
      },
    },
    {
      name: 'codeSalle2',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <select className=' rounded' name='codeSalle2' onChange={onChange}>
              {salles.map((salle) => (
                <option value={salle?.id} key={salle?.id}>
                  {salle?.id}
                </option>
              ))}
            </select>
          );
        },
      },
    },
    {
      name: 'IdSeance',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <select className=' rounded' name='IdSeance' onChange={onChange}>
              {seances.map((seance) => (
                <option value={seance?.idSeance} key={seance?.idSeance}>
                  {seance?.idSeance}
                </option>
              ))}

              <option value=''>1</option>
            </select>
          );
        },
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
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <select className=' rounded' name='surv11' onChange={onChange}>
              {surveillants.map((surveillant) => (
                <option
                  value={surveillant?.chefDept}
                  key={surveillant?.chefDept}
                >
                  {surveillant?.chefDept}
                </option>
              ))}
            </select>
          );
        },
      },
    },
    {
      name: 'surv12',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <select className=' rounded' name='surv12' onChange={onChange}>
              {surveillants.map((surveillant) => (
                <option
                  value={surveillant?.chefDept}
                  key={surveillant?.chefDept}
                >
                  {surveillant?.chefDept}
                </option>
              ))}
            </select>
          );
        },
      },
    },
    {
      name: 'surv21',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <select className=' rounded' name='surv21' onChange={onChange}>
              {surveillants.map((surveillant) => (
                <option
                  value={surveillant?.chefDept}
                  key={surveillant?.chefDept}
                >
                  {surveillant?.chefDept}
                </option>
              ))}
            </select>
          );
        },
      },
    },
    {
      name: 'surv22',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <select className=' rounded' name='surv22' onChange={onChange}>
              {surveillants.map((surveillant) => (
                <option
                  value={surveillant?.chefDept}
                  key={surveillant?.chefDept}
                >
                  {surveillant?.chefDept}
                </option>
              ))}
            </select>
          );
        },
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
            <div className='d-flex'>
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
              <Button
                onClick={() =>
                  onAdd(epreuves[tableMeta.rowIndex].id, tableMeta.rowIndex)
                }
                size='sm'
                variant='success'
                className='ms-2'
              >
                <HiOutlineFolderAdd />
              </Button>
            </div>
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
    dispatch(getAllSalles());
    dispatch(getSeanceList());
    dispatch(getSurveillantsList());
    dispatch(getModulesList());
  }, [dispatch, refresh]);

  return (
    <DashboardLayout>
      <div id='topnavbar'>
        <div className='topnav '>
          <div className='d-flex px-1 '>
            <Link to='/epreuves'>List des epreuves</Link>
            <Link to={`/calendrier/${1}`}>Calendrier</Link>
            <Link to='/admin-calendrier'>Admin-Calendrier</Link>
          </div>
        </div>
      </div>
      <Card.Header className='card-header d-flex  justify-content-between'>
        <h5 className='mb-0 text-white'></h5>
        <h6>
          <Button
            onClick={handleShowEp}
            variant=''
            className='bg-red-600 text-white'
            size='sm'
          >
            Ajouter une Epreuve
          </Button>
        </h6>
      </Card.Header>
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
      <EpreuveForm
        showEp={showEp}
        handleCloseEp={handleCloseEp}
        setRefresh={setRefresh}
      />
    </DashboardLayout>
  );
};

export default EpreuvesTable;
