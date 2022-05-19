import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { setError } from '../../utils/help-api';
import { signInWithEmailAndPassword } from '@firebase/auth';
import auth from '../../firebase/config';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const userLogin = createAsyncThunk(
  'get/sessions',
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      return res.user;
    } catch (error) {
      const message = setError(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userLoginSlice = createSlice({
  name: 'dispoSalles-list',
  initialState,
  reducers: {
    userLogout: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.dispoSalles = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { userLogout } = userLoginSlice.actions;

export default userLoginSlice;
