import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  salles: [],
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getAllSalles = createAsyncThunk('get/salles', async (thunkAPI) => {
  try {
    const res = await myAxios.get('/cexSalles');
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    const message = setError(error);
    toast.error(message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const salleListSlice = createSlice({
  name: 'dispoSalles-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSalles.pending, (state) => {
        state.loading = true;
        state.salles = [];
      })
      .addCase(getAllSalles.fulfilled, (state, action) => {
        state.loading = false;
        state.salles = action.payload;
      })
      .addCase(getAllSalles.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      });
  },
});

export default salleListSlice;
