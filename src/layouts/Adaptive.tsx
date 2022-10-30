import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMediaState } from "../redux/adaptive/slice";
import { Media } from "../redux/adaptive/types";

const Adaptive = ({ children }: any) => {
	const dispatch = useDispatch();

	const medias = Object.entries(Media).filter(
		(item) => typeof item[1] === "number"
	);

	const updateMedia = useCallback((number: number) => {
		dispatch(setMediaState(number));
	}, []);

	useEffect(() => {
		const breakpoints = medias.map((item) =>
			window.matchMedia(`(max-width: ${item[1]}em)`)
		);

		function breakpointChecker(event: MediaQueryListEvent | MediaQueryList) {
			const media: number = +event.media.replace(/[^0-9.]/g, "");

			medias.forEach((item, index, self) => {
				if (item[1] === media && index > 0) {
					event.matches
						? updateMedia(media)
						: updateMedia(+self[index - 1][1]);
				}
			});
		}

		breakpoints.forEach((item, index) => {
			if (index > 0) item.addListener(breakpointChecker);
		});

		return () => {
			breakpoints.forEach((item, index) => {
				if (index > 0) item.removeListener(breakpointChecker);
			});
		};
	}, []);

	return <div className="wrapper">{children}</div>;
};

export default Adaptive;
