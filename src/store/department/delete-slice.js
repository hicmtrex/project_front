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
 * Delete department
 * @param {id} number
 */

export const deleteDepartment = createAsyncThunk(
  'delete/department/:id',
  async (id, thunkAPI) => {
    try {
      await myAxios.delete(`/departments/${id}`);
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const deleteDepartmentSlice = createSlice({
  name: 'delete-department',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteDepartment.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(deleteDepartment.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.refresh = !state.refresh;
      })
      .addCase(deleteDepartment.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default deleteDepartmentSlice;
