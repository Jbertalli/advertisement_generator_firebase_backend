import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

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
            state.value += action.payload
        },
        deleteTop: (state) => {
            state.value = ''
        },
    },
})

export const { incrementTop, deleteTop } =  topSlice.actions
export default topSlice.reducer