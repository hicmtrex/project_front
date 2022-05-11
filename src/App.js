import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/UI/loader';
import HomePage from './pages/home';
import DepartmentTable from './pages/tables/department/department-table';
import ModulesTable from './pages/tables/modules/modules-list';
import SallesAffectation from './pages/tables/salles/salles-affectation';
import SallesDisponibles from './pages/tables/salles/salles-disponibles';
import SeanceTable from './pages/tables/seance/seance-table';
import SessionTable from './pages/tables/session/session-table';
import SurveillantAffectationTable from './pages/tables/surveillants/surveillants-affectation';
import SurveillantTable from './pages/tables/surveillants/surveillants-table';
import Login from './pages/users/login/login';
import Register from './pages/users/register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/department' element={<DepartmentTable />} />
        <Route path='/modules' element={<ModulesTable />} />
        <Route path='/salles' element={<SallesDisponibles />} />
        <Route path='/salle-affectation' element={<SallesAffectation />} />
        <Route path='/surveillants' element={<SurveillantTable />} />
        <Route
          path='/surveillants-affectation'
          element={<SurveillantAffectationTable />}
        />
        <Route path='/seance' element={<SeanceTable />} />
        <Route path='/session' element={<SessionTable />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </Router>
  );
};

export default withAuthenticationRequired(App, {
  onRedirecting: () => <Loader />,
});
