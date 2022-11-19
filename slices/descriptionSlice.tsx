import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface DescriptionState {
    value: string
}

const initialState: DescriptionState = {
    value: '',
}

export const descriptionSlice = createSlice({
    name: 'description',
    initialState,
    reducers: {
        incrementDescription: (state, action: PayloadAction<string>) => {
            // state.value += action.payload
            state.value = action.payload
        },
        deleteDescription: (state) => {
            state.value = ''
        },
    },
})

export const { incrementDescription, deleteDescription } = descriptionSlice.actions;

export const descriptionValue = (state: RootState) => state.description.value;

export default descriptionSlice.reducer;
