import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { userList, user } from './ApiSearchApi';



export interface ApiState {
  value: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ApiState = {
  value: { data: [], total_pages: 0, page: 0, user: null },
  status: 'idle',
};


export const userListAsync = createAsyncThunk(
  'apisearch/userList',
  async (amount: string) => {
    const response = await userList(amount);
    return response;
  }
);
export const userAsync = createAsyncThunk(
  'apisearch/user',
  async (amount: string) => {
    const response = await user(amount);
    return response;
  }
);



export const apiSearchSlice = createSlice({
  name: 'apisearch',
  initialState,
  reducers: {
    cleanUser: (state) => {
      state.value.user = null
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(userListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = { ...action.payload, user: null };
      })
      .addCase(userListAsync.rejected, (state) => {
        state.status = 'failed';
      });
    builder
      .addCase(userAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value.user = action.payload.data;
      })
      .addCase(userAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { cleanUser } = apiSearchSlice.actions;


export const searchData = (state: RootState) => state.apisearch.value;


export default apiSearchSlice.reducer;
