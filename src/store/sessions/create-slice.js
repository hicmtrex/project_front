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
export const createSession = createAsyncThunk(
  'post/session',
  async (session, thunkAPI) => {
    try {
      const res = await myAxios.post('/cexSessions', session, {
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

const createSessionSlice = createSlice({
  name: 'create-session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSession.fulfilled, (state) => {
        state.success = true;
        state.refresh = !state.refresh;
        state.loading = false;
      })
      .addCase(createSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default createSessionSlice;
