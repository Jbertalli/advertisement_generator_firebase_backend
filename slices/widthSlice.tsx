import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface WidthState {
    value: any
}

const initialState: WidthState = {
    value: '',
}

export const widthSlice = createSlice({
    name: 'width',
    initialState,
    reducers: {
        incrementWidth: (state, action: PayloadAction<any>) => {
            // state.value += action.payload
            state.value = action.payload
        },
        deleteWidth: (state) => {
            state.value = ''
        },
    },
})

export const { incrementWidth, deleteWidth } =  widthSlice.actions;

//selector
export const widthValue = (state: RootState) => state.width.value;

export default widthSlice.reducer;
