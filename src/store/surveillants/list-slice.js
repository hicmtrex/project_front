import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  sessions: [],
  loading: false,
  error: null,
};

/**
 * get all departments
 */
export const getSessionList = createAsyncThunk(
  'get/sessions',
  async (thunkAPI) => {
    try {
      const res = await myAxios.get('/cexSessions');
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

const listSessionSlice = createSlice({
  name: 'sessions-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSessionList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSessionList.fulfilled, (state, action) => {
        state.loading = false;
        state.sessions = action.payload;
      })
      .addCase(getSessionList.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;
      });
  },
});

export default listSessionSlice;
