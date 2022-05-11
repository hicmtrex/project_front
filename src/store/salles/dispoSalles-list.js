import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  dispoSalles: [],
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getDispoSalles = createAsyncThunk(
  'get/dispoSalles',
  async (thunkAPI) => {
    try {
      const res = await myAxios.get('/sallesDisponibles');
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

const getDispoSallesSlice = createSlice({
  name: 'dispoSalles-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDispoSalles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDispoSalles.fulfilled, (state, action) => {
        state.loading = false;
        state.dispoSalles = action.payload;
      })
      .addCase(getDispoSalles.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      });
  },
});

export default getDispoSallesSlice;
