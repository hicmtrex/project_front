import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  planifications: [],
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getPlanificationList = createAsyncThunk(
  'get/planifications',
  async (thunkAPI) => {
    try {
      const res = await myAxios.get('/planificationEpreuve');
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

const planificationSListSlice = createSlice({
  name: 'planifications-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlanificationList.pending, (state) => {
        state.modules = [];
        state.loading = true;
      })
      .addCase(getPlanificationList.fulfilled, (state, action) => {
        state.loading = false;
        state.planifications = action.payload;
      })
      .addCase(getPlanificationList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default planificationSListSlice;
