import { createSlice } from '@reduxjs/toolkit';
import { IProducts } from '../types';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IProductState {
    products: IProducts;
}

const initialState: IProductState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<IProducts>) {
            return { ...state, products: action.payload };
        },
    },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
