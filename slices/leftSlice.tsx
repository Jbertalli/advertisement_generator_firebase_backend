import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface LeftState {
    value: any
}

const initialState: LeftState = {
    value: '',
}

export const leftSlice = createSlice({
    name: 'left',
    initialState,
    reducers: {
        incrementLeft: (state, action: PayloadAction<any>) => {
            // state.value += action.payload
            state.value = action.payload
        },
        deleteLeft: (state) => {
            state.value = ''
        },
    },
})

export const { incrementLeft, deleteLeft } =  leftSlice.actions;

//selector
export const leftValue = (state: RootState) => state.left.value;

export default leftSlice.reducer;
