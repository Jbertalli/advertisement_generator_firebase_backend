import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import companyReducer from './slices/companySlice';
import descriptionReducer from './slices/descriptionSlice';
import widthReducer from './slices/widthSlice';
import heightReducer from './slices/heightSlice';
import leftReducer from './slices/leftSlice';
import topReducer from './slices/topSlice';
import mediaPreviewReducer from './slices/mediaSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        company: companyReducer,
        description: descriptionReducer,
        width: widthReducer,
        height: heightReducer,
        left: leftReducer,
        top: topReducer,
        mediaPreview: mediaPreviewReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
