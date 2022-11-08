import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface CompanyState {
    value: string
}

const initialState: CompanyState = {
    value: '',
}

export const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        incrementCompany: (state, action: PayloadAction<string>) => {
            state.value += action.payload
        },
        deleteCompany: (state) => {
            state.value = ''
        },
    },
})

export const { incrementCompany, deleteCompany } =  companySlice.actions
export default companySlice.reducer