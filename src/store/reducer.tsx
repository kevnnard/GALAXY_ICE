import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import cartReducer from "./slices/cart";
import productsReducer from "./slices/products";
import snackbarReducer from "./slices/snackbar";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";
const createNoopStorage = () => {
	return {
		getItem(_key: any) {
			return Promise.resolve(null);
		},
		setItem(_key: any, value: any) {
			return Promise.resolve(value);
		},
		removeItem(_key: any) {
			return Promise.resolve();
		},
	};
};
const storage =
	typeof window !== "undefined"
		? createWebStorage("local")
		: createNoopStorage();

const reducer = combineReducers({
	cart: persistReducer(
		{
			key: "cart",
			storage: storage,
		},
		cartReducer
	),
	products: productsReducer,
	snackbar: snackbarReducer,
});

export default reducer;
