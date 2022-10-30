import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdaptiveStateType } from "./types";

const initialState: AdaptiveStateType = {
	media: window.innerWidth / 16,
};

export const adaptiveSlice = createSlice({
	name: "adaptive",
	initialState,
	reducers: {
		setMediaState(state, action: PayloadAction<number>) {
			state.media = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setMediaState } = adaptiveSlice.actions;

export default adaptiveSlice.reducer;
