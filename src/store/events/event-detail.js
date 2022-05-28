import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  event: null,
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getEventsById = createAsyncThunk(
  'get/events/:id',
  async (id, thunkAPI) => {
    try {
      const res = await myAxios.get(`/events/${id}`);
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

const eventDetailsSlice = createSlice({
  name: 'events-detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEventsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEventsById.fulfilled, (state, action) => {
        state.loading = false;
        state.event = action.payload;
      })
      .addCase(getEventsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default eventDetailsSlice;
