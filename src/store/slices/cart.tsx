import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	error: null,
	cartArray: Array<ProductProps>(),
	total: 0,
	shipping: Number(0),
	favoriteProducts: [],
	favoriteEvents: [],
};

const slice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		hasError(state, action) {
			state.error = action.payload;
		},
		// Q U E R Y

		// M U T A T I O N S
		// FAVORITES PRODUCTS AND EVENTS MUTATIONS
		addProdcutFavorite: (state: any, action: { payload: ProductProps }) => {
			const product = state.favoriteProducts.find(
				(item: ProductProps) => item._id === action.payload._id
			);
			if (!product) {
				state.favoriteProducts.push({ ...action.payload, favorite: true });
			}
		},
		removeProductFavorite: (state: any, action: { payload: ProductProps }) => {
			const productsFav = state.favoriteProducts.filter(
				(item: ProductProps) => item._id !== action.payload._id
			);
			state.favoriteProducts = productsFav;
		},
		// CART MUTATIONS
		addNewServiceCarSucces: (
			state,
			action: {
				payload: { item: ProductProps; sizeSelected: string | undefined };
			}
		) => {
			const itemInCart: any = state.cartArray.find(
				(item: ProductProps) => item._id === action.payload.item._id
			);
			!itemInCart
				? (state.cartArray.push({
						...action.payload.item,
						quantity: 1,
						sizeSelected: action.payload.sizeSelected,
				  }),
				  (state.total = state.total + action.payload.item.price))
				: (itemInCart.quantity++,
				  (state.total = state.total + action.payload.item.price));
		},
		removeItem: (state, action: { payload: { item: ProductProps } }) => {
			const removeItem: any = state.cartArray.filter(
				(item: ProductProps) => item._id !== action.payload.item._id
			);
			state.cartArray = removeItem;
			state.total =
				state.total - action.payload.item.price * action.payload.item.quantity!;
		},
		incrementQuantityReducer: (
			state,
			action: { payload: { item: ProductProps } }
		) => {
			const findItem: any = state.cartArray.find(
				(item: ProductProps) => item._id === action.payload.item._id
			);
			if (findItem) {
				findItem.quantity++;
				state.total = state.total + findItem.price;
			}
		},
		decrementQuantityReducer: (
			state,
			action: { payload: { item: ProductProps } }
		) => {
			const findItem: any = state.cartArray.find(
				(item: ProductProps) => item._id === action.payload.item._id
			);
			if (findItem) {
				if (findItem.quantity === 1) {
					findItem.quantity = 1;
				} else {
					findItem.quantity--;
					state.total = state.total - findItem.price;
				}
			}
		},
	},
});

export const {
	addNewServiceCarSucces,
	incrementQuantityReducer,
	decrementQuantityReducer,
	removeItem,
	addProdcutFavorite,
	removeProductFavorite,
} = slice.actions;
export default slice.reducer;
