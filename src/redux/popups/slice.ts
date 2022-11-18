import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PopupStateType } from "./types";

const initialState: PopupStateType = {
	open: false,
};

export const popupSlice = createSlice({
	name: "adaptive",
	initialState,
	reducers: {
		setPopupState(state, action: PayloadAction<boolean>) {
			state.open = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setPopupState } = popupSlice.actions;

export default popupSlice.reducer;
