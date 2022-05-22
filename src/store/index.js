import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import classesListSlice from './classes/list-slice';
import createDepartmentSlice from './department/create-slice';
import deleteDepartmentSlice from './department/delete-slice';
import departmentDetailsSlice from './department/department-details';
import departmentListSlice from './department/department-list';
import epreuvesListSlice from './epreuves/list-slice';
import modulesListSlice from './modules/list-slice';
import planificationSListSlice from './planification/list-slice';
import getDispoSallesSlice from './salles/dispoSalles-list';
import salleListSlice from './salles/list-slice';
import createSeanceSlice from './seance/create-slice';
import listSeanceSlice from './seance/list-seance';
import createSessionSlice from './sessions/create-slice';
import listSessionSlice from './sessions/list-session';
import listSurveillantListSlice from './surveillants/list-slice';
import userLoginSlice from './users/login-slice';

const reducers = combineReducers({
  departmentList: departmentListSlice.reducer,
  createDepartment: createDepartmentSlice.reducer,
  deleteDepartment: deleteDepartmentSlice.reducer,
  departmentDetails: departmentDetailsSlice.reducer,
  //auth
  login: userLoginSlice.reducer,
  //session
  listSession: listSessionSlice.reducer,
  createSession: createSessionSlice.reducer,
  //seance
  listSeance: listSeanceSlice.reducer,
  createSeance: createSeanceSlice.reducer,
  //modules
  modulesList: modulesListSlice.reducer,
  //classes
  classesList: classesListSlice.reducer,
  //salles
  salleList: salleListSlice.reducer,
  dispoSalles: getDispoSallesSlice.reducer,
  //epreuves
  epreuvesList: epreuvesListSlice.reducer,
  planificationSList: planificationSListSlice.reducer,
  //surveillants
  listSurveillantList: listSurveillantListSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ,
  // whitelist: ,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
