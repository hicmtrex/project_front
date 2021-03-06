import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  surveillants: [],
  loading: false,
  error: null,
};

/**
 * get all surveillants
 */
export const getSurveillantsList = createAsyncThunk(
  'get/surveillants',
  async (thunkAPI) => {
    try {
      const res = await myAxios.get('/cexSurveillantDisponibles');
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

const listSurveillantListSlice = createSlice({
  name: 'surveillants-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSurveillantsList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSurveillantsList.fulfilled, (state, action) => {
        state.loading = false;
        state.surveillants = action.payload;
      })
      .addCase(getSurveillantsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default listSurveillantListSlice;
