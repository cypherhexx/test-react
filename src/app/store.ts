import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import apiSearchSlice from '../features/apiSearchSlice/apisearchSlice';
import counterReducer from '../features/counter/counterSlice';
import loginSlice from '../features/login/loginSlice';
import layoutSlice from '../layoutSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    layout: layoutSlice,
    login: loginSlice,
    apisearch: apiSearchSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
