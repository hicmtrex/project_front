import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminCalendar from './pages/calendar/admin-calendar';
import FulCalendar from './pages/calendar/full-calendar';
import HomePage from './pages/home';
import ClassesTable from './pages/tables/classes/classes-table';
import DepartmentTable from './pages/tables/department/department-table';
import EpreuvesTable from './pages/tables/epreuves/epreuves-table';
import EprevueUpdate from './pages/tables/epreuves/eprevue-update';
import ModulesTable from './pages/tables/modules/modules-list';
import PlanificationTable from './pages/tables/planification/planification-table';
import ListSalles from './pages/tables/salles/list-salles';
import SallesAffectation from './pages/tables/salles/salles-affectation';
import SallesDisponibles from './pages/tables/salles/salles-disponibles';
import SeanceTable from './pages/tables/seance/seance-table';
import SeanceUpdate from './pages/tables/seance/seance-update';
import SessionTable from './pages/tables/session/session-table';
import SessionUpdate from './pages/tables/session/session-update';
import ListSurveillants from './pages/tables/surveillants/list-surveillants';
import SurveillantAffectationTable from './pages/tables/surveillants/surveillants-affectation';
import SurveillantDisponible from './pages/tables/surveillants/surveillants-table';
import Login from './pages/users/login/login';
import Register from './pages/users/register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/department' element={<DepartmentTable />} />
        <Route path='/modules' element={<ModulesTable />} />
        <Route path='/planification' element={<PlanificationTable />} />
        <Route path='/classes' element={<ClassesTable />} />
        <Route path='/salle' element={<ListSalles />} />
        <Route path='/salles-disponible' element={<SallesDisponibles />} />
        <Route path='/salle-affectation' element={<SallesAffectation />} />
        <Route path='/surveillants' element={<ListSurveillants />} />
        <Route path='/calendrier/:id' element={<FulCalendar />} />
        <Route path='/admin-calendrier' element={<AdminCalendar />} />
        <Route
          path='/surveillants-affectation'
          element={<SurveillantAffectationTable />}
        />
        <Route
          path='/surveillants-disponible'
          element={<SurveillantDisponible />}
        />

        <Route path='/seance' element={<SeanceTable />} />
        <Route path='/seance-update/:id' element={<SeanceUpdate />} />
        <Route path='/session' element={<SessionTable />} />
        <Route path='/session-update/:id' element={<SessionUpdate />} />
        <Route path='/epreuves' element={<EpreuvesTable />} />

        <Route path='/epreuves-update/:id' element={<EprevueUpdate />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </Router>
  );
};

export default App;
