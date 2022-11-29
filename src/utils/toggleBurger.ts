let scroll = 0;

export const toggleBurger = () => {
	const html = document.documentElement;
	const header = document.querySelector("header");
	if (html.classList.contains("menu-open")) {
		header?.classList.add("_no-transform");
		html.classList.remove("menu-open");
		setTimeout(() => {
			window.scrollTo(0, scroll);
		}, 10);
		setTimeout(function () {
			header?.classList.remove("_no-transform");
		}, 2000);
	} else {
		scroll = document.documentElement.scrollTop;
		html.classList.add("menu-open");
		window.scrollTo(0, 0);
	}
};
