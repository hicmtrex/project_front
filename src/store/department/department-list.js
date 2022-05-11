import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  departments: [],
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getAllDepartment = createAsyncThunk(
  'get/department',
  async (thunkAPI) => {
    try {
      const res = await myAxios.get('/cexDepts');
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

const departmentListSlice = createSlice({
  name: 'department-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllDepartment.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllDepartment.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = action.payload;
      })
      .addCase(getAllDepartment.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      });
  },
});

export default departmentListSlice;
