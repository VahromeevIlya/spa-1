import { configureStore } from "@reduxjs/toolkit";
import adaptive from "./adaptive/slice";
import popup from "./popups/slice";
export const store = configureStore({
	reducer: {
		adaptive,
		popup
	},
});

export type RootState = ReturnType<typeof store.getState>