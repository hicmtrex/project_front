import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  success: false,
  loading: false,
  error: null,
  refresh: false,
};

/**
 * create department
 */

export const createDepartment = createAsyncThunk(
  'post/department',
  async (department, thunkAPI) => {
    try {
      await myAxios.post('/cexDept', department); // + /cexDept/add
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const createDepartmentSlice = createSlice({
  name: 'create-department',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createDepartment.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(createDepartment.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.refresh = !state.refresh;
      })
      .addCase(createDepartment.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default createDepartmentSlice;
