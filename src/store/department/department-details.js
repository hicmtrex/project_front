import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  department: {},
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getDepartmentById = createAsyncThunk(
  'get/department/:id',
  async (id, thunkAPI) => {
    try {
      const res = await myAxios.get(`/departments/${id}`);
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

const departmentDetailsSlice = createSlice({
  name: 'department-detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDepartmentById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDepartmentById.fulfilled, (state, action) => {
        state.department = action.payload;
        state.loading = false;
      })
      .addCase(getDepartmentById.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      });
  },
});

export default departmentDetailsSlice;
