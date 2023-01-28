import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { search } from './ApiSearchApi';



export interface ApiState {
  value: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ApiState = {
  value: [],
  status: 'idle',
};


export const searchAsync = createAsyncThunk(
  'apisearch/search',
  async (amount: string) => {
    const response = await search(amount);
    console.log(response)
    return response;
  }
);



export const apiSearchSlice = createSlice({
  name: 'apisearch',
  initialState,
  reducers: {
    clean: (state) => {
      state.value = ""
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(searchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(searchAsync.rejected, (state) => {
        state.status = 'failed';
      });

  },
});

export const { clean } = apiSearchSlice.actions;


export const searchData = (state: RootState) => state.apisearch.value;


export default apiSearchSlice.reducer;
