import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import companyReducer from './slices/companySlice';
import descriptionReducer from './slices/descriptionSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        company: companyReducer,
        description: descriptionReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
