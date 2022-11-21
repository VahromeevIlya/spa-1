export interface Values {
	firstName: string;
	phone: string;
}
export type Props = {
	opened: boolean;
	setOpened: (bool: boolean) => void;
	classForm: string;
	classHeadline?: string;
	closeCallback?: () => void;
};