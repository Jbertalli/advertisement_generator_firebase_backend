import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface TopState {
    value: any
}

const initialState: TopState = {
    value: '',
}

export const topSlice = createSlice({
    name: 'top',
    initialState,
    reducers: {
        incrementTop: (state, action: PayloadAction<any>) => {
            // state.value += action.payload
            state.value = action.payload
        },
        deleteTop: (state) => {
            state.value = ''
        },
    },
})

export const { incrementTop, deleteTop } = topSlice.actions;

//selector
export const topValue = (state: RootState) => state.top.value;

export default topSlice.reducer;
