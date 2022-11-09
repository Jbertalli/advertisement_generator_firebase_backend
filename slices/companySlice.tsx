import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

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
            // state.value += action.payload
            state.value = action.payload
        },
        deleteCompany: (state) => {
            state.value = ''
        },
    },
})

export const { incrementCompany, deleteCompany } =  companySlice.actions;

//selector
export const companyValue = (state: RootState) => state.company.value;

export default companySlice.reducer;