
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface mediaPreviewState {
    value: any
}

const initialState: mediaPreviewState = {
    value: '',
}

export const mediaPreviewSlice = createSlice({
    name: 'mediaPreview',
    initialState,
    reducers: {
        incrementMediaPreview: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
        deleteMediaPreview: (state) => {
            state.value = ''
        },
    },
})

export const { incrementMediaPreview, deleteMediaPreview } = mediaPreviewSlice.actions;

export const mediaPreviewValue = (state: RootState) => state.mediaPreview.value;

export default mediaPreviewSlice.reducer;
