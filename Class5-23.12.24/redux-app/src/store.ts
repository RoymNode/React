import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productsSlice';
import citiesReducer from './features/citiesSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cities: citiesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;