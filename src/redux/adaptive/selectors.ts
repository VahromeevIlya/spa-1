import { RootState } from "../store";

export const mediaSize = (state: RootState) => state.adaptive.media;
export const headerTheme = (state: RootState) => state.adaptive.header;