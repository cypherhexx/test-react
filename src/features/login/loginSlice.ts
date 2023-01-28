import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { checkToken } from './loginAPI';
import { removeCookie, setCookie, getCookie } from 'typescript-cookie'


export interface LoginState {
  value: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: LoginState = {
  value: getCookie("token") ? "token" : "",
  status: "idle"
};


export const checkTokenAsync = createAsyncThunk(
  'login/checkToken',
  async (amount: string) => {
    const response = await checkToken(amount);
    return response.data;
  }
);


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      setCookie("token", state.value)
    },
    remiveToken: (state) => {
      state.value = ""
      removeCookie("token")
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkTokenAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkTokenAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(checkTokenAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setToken, remiveToken } = loginSlice.actions;

export const getToken = (state: RootState) => state.login.value === "" ? false : true;


export default loginSlice.reducer;
