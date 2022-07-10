import { createSlice } from '@reduxjs/toolkit';
import { ICategories } from '../types';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ICategoryState {
    categories: ICategories;
}

const initialState: ICategoryState = {
    categories: [],
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<ICategories>) {
            return { ...state, categories: action.payload };
        },
    },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
