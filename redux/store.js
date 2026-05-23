import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../features/counterSlice';
import productsSlice from '../features/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    products: productsSlice
  },
});