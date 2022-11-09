import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

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
            state.value += action.payload
        },
        deleteLeft: (state) => {
            state.value = ''
        },
    },
})

export const { incrementLeft, deleteLeft } =  leftSlice.actions
export default leftSlice.reducer
