import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  modules: [],
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getModulesList = createAsyncThunk(
  'get/modules',
  async (thunkAPI) => {
    try {
      const res = await myAxios.get('/cexModules');
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const modulesListSlice = createSlice({
  name: 'modules-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getModulesList.pending, (state) => {
        state.modules = [];
        state.loading = true;
      })
      .addCase(getModulesList.fulfilled, (state, action) => {
        state.loading = false;
        state.modules = action.payload;
      })
      .addCase(getModulesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default modulesListSlice;
