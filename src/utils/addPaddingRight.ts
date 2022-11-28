export const addPaddingRight = (add: boolean) => {
	const ELEMENTS: HTMLElement[] = [];
	const HEADER = document.querySelector("header > div") as HTMLElement;
	const BODY = document.body;

	HEADER && ELEMENTS.push(HEADER);
	ELEMENTS.push(BODY);

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
