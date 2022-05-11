import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  seances: [],
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getSeanceList = createAsyncThunk(
  'get/seances',
  async (thunkAPI) => {
    try {
      const res = await myAxios.get('/cexSeances');
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

const listSeanceSlice = createSlice({
  name: 'seances-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSeanceList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSeanceList.fulfilled, (state, action) => {
        state.seances = action.payload;
        state.loading = false;
      })
      .addCase(getSeanceList.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      });
  },
});

export default listSeanceSlice;
