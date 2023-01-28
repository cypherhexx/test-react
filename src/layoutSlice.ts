import { createTheme } from '@mui/material/styles';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './app/store';

if (!localStorage.mode) {
    localStorage.mode = "light"
}

export interface ILayout {
    mode: 'dark' | 'light'
}

export interface LayoutState {
    value: ILayout;
}

const initialState: LayoutState = {
    value: { mode: localStorage.mode },
};



export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setMode(state) {
            state.value.mode = state.value.mode === 'dark' ? 'light' : 'dark';
            localStorage.mode = state.value.mode
        }
    },
});

export const { setMode } = layoutSlice.actions;
export const getMode = (state: RootState) => state.layout.value.mode === 'dark' ? 'light' : 'dark'
export const getTheme = (state: RootState) => createTheme({
    palette: {
        mode: state.layout.value.mode
    }
});


export default layoutSlice.reducer;
