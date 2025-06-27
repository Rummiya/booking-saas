import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
