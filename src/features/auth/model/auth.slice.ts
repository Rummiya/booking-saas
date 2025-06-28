import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, ResponseData } from './types';

const initialState: AuthState = {
  token: null,
  username: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state: AuthState, { payload }: PayloadAction<ResponseData>) => {
      state.token = payload.token;
      state.username = payload.username;
      state.role = payload.role;

      localStorage.setItem('token', payload.token);
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
