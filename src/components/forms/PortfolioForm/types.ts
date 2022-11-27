import React from "react";

export interface Values {
	select: string | Select[];
	checked: [] | string[];
}
export type Select = {
	value: string;
	label: string;
};
export type FormCallbackProps = {
	name: string;
	value?: string;
	children?: React.ReactNode;
}