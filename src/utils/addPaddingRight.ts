const ELEMENTS: HTMLElement[] = [];
const HEADER = document.querySelector("header");
const BODY = document.body;

HEADER && ELEMENTS.push(HEADER);
ELEMENTS.push(BODY);

export const addPaddingRight = (add: boolean) => {
	if (add) {
		const wrapper = document.querySelector(".wrapper") as HTMLElement;
		if (wrapper) {
			ELEMENTS.forEach((item) => {
				item.style.paddingRight =
					window.innerWidth - wrapper.offsetWidth + "px";
			});
		}
	} else {
		ELEMENTS.forEach((item) => (item.style.paddingRight = "0px"));
	}
};
