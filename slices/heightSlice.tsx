import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface HeightState {
    value: any
}

const initialState: HeightState = {
    value: '',
}

export const heightSlice = createSlice({
    name: 'height',
    initialState,
    reducers: {
        incrementHeight: (state, action: PayloadAction<any>) => {
            // state.value += action.payload
            state.value = action.payload
        },
        deleteHeight: (state) => {
            state.value = ''
        },
    },
})

export const { incrementHeight, deleteHeight } = heightSlice.actions;

//selector
export const heightValue = (state: RootState) => state.height.value;

export default heightSlice.reducer;
