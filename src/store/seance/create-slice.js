import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  success: false,
  refresh: false,
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const createSeance = createAsyncThunk(
  'post/seances',
  async (seance, thunkAPI) => {
    try {
      const res = await myAxios.post('/cexSeances', seance, {
        headers: {
          'Content-Type': 'application/json',
        },
      }); // + add for spring boot
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

const createSeanceSlice = createSlice({
  name: 'create-seances',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSeance.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSeance.fulfilled, (state) => {
        state.success = true;
        state.refresh = !state.refresh;
        state.loading = false;
      })
      .addCase(createSeance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default createSeanceSlice;
