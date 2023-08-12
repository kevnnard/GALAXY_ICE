import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	error: null,
	store: [],
};

const slice = createSlice({
	name: "store",
	initialState,
	reducers: {
		hasError(state, action) {
			state.error = action.payload;
		},
		// Q U E R Y

		// M U T A T I O N S
	},
});

export const {} = slice.actions;
export default slice.reducer;
