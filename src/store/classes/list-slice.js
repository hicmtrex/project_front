import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  classes: [],
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getAllClasses = createAsyncThunk(
  'get/classes',
  async (thunkAPI) => {
    try {
      const res = await myAxios.get('/cexClasses');
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

const classesListSlice = createSlice({
  name: 'classes-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllClasses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllClasses.fulfilled, (state, action) => {
        state.loading = false;
        state.classes = action.payload;
      })
      .addCase(getAllClasses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default classesListSlice;
