import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	errorProducts: null,
	products: null,
	product: null,
};

const slice = createSlice({
	name: "products",
	initialState,
	reducers: {
		hasError(state, action) {
			state.errorProducts = action.payload;
		},
		// Q U E R Y S
		getAllProductsReducer(state, action) {
			state.products = action.payload;
		},
		getOneProductReducer(state, action) {
			state.product = action.payload;
		},
		// M U T A T I O N S
	},
});

export const { getAllProductsReducer, getOneProductReducer, hasError } =
	slice.actions;
export default slice.reducer;
