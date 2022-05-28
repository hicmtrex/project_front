import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  events: [],
  staticEvents: [],
  staticEventDetail: null,
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getEventsList = createAsyncThunk(
  'get/events',
  async (thunkAPI) => {
    try {
      const res = await myAxios.get(`/events`);
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

const eventListSlice = createSlice({
  name: 'events-list',
  initialState,
  reducers: {
    saveEvent: (state, action) => {
      const event = action.payload;
      state.staticEvents = event;
    },
    setStaticEventById: (state, action) => {
      state.staticEventDetail = state.staticEvents.find(
        (v) => v.id == action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEventsList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEventsList.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(getEventsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { saveEvent, setStaticEventById } = eventListSlice.actions;
export default eventListSlice;
