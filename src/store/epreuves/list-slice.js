import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  epreuves: [],
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getEpreuvesList = createAsyncThunk(
  'get/epreuves',
  async (thunkAPI) => {
    try {
      const res = await myAxios.get('/cexEpreuves');
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

const epreuvesListSlice = createSlice({
  name: 'epreuves-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEpreuvesList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEpreuvesList.fulfilled, (state, action) => {
        state.loading = false;
        state.epreuves = action.payload;
      })
      .addCase(getEpreuvesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default epreuvesListSlice;
