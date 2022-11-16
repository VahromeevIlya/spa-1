import React from "react";

export type SimpleAnimatedModalLayout = {
	onClose?: () => void;
	children?: React.ReactNode;
	opened: boolean;
};
