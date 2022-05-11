import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createDepartmentSlice from './department/create-slice';
import deleteDepartmentSlice from './department/delete-slice';
import departmentDetailsSlice from './department/department-details';
import departmentListSlice from './department/department-list';
import getDispoSallesSlice from './salles/dispoSalles-list';
import listSeanceSlice from './seance/list-seance';
import listSessionSlice from './sessions/list-session';
import userLoginSlice from './users/login-slice';

const reducers = combineReducers({
  departmentList: departmentListSlice.reducer,
  createDepartment: createDepartmentSlice.reducer,
  deleteDepartment: deleteDepartmentSlice.reducer,
  dispoSalles: getDispoSallesSlice.reducer,
  departmentDetails: departmentDetailsSlice.reducer,
  //auth
  login: userLoginSlice.reducer,
  //session
  listSession: listSessionSlice.reducer,
  //seance
  listSeance: listSeanceSlice.reducer,
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
