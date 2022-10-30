import { configureStore } from "@reduxjs/toolkit";
import adaptive from "./adaptive/slice";
export const store = configureStore({
	reducer: {
		adaptive
	},
});

export type RootState = ReturnType<typeof store.getState>