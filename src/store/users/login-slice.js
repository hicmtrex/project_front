import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { myAxios } from '../../utils/axios';
import { setError } from '../../utils/help-api';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

// export const userLogin = createAsyncThunk();

const userLoginSlice = createSlice({
  name: 'dispoSalles-list',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.userInfo = action.payload;
    },
    userLogout: (state) => {
      state.userInfo = null;
      document.location.href = '/login';
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(userLogin.pending, (state) => {
  //         state.loading = true;
  //       })
  //       .addCase(userLogin.fulfilled, (state, action) => {
  //         state.loading = false;
  //         state.dispoSalles = action.payload;
  //       })
  //       .addCase(userLogin.rejected, (state, action) => {
  //         state.loading = false;
  //         state.error = action.payload;
  //       });
  //   },
});

export const { userLogin, userLogout } = userLoginSlice.actions;

export default userLoginSlice;
