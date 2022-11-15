import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setMediaState } from "../redux/adaptive/slice";
import { Media } from "../redux/adaptive/types";
import { Outlet } from "react-router-dom";
import { Header, Footer, MenuMobileDown, MenuMobileUp } from "../components";
import Rellax from "rellax";
import Parallax from 'parallax-js';
type Props = {
	media: number;
};

const leafs = [
	{
		depth: 0.2,
		img: {
			srcSet: "img/leafs/leaf-1.webp",
			src: "img/leafs/leaf-1.png",
		},
		relaxSpeed: 2,
	},
	{
		depth: 0.5,
		img: {
			srcSet: "img/leafs/leaf-2.webp",
			src: "img/leafs/leaf-2.png",
		},
		relaxSpeed: 3,
	},
	{
		img: {
			srcSet: "img/leafs/leaf-3.webp",
			src: "img/leafs/leaf-3.png",
		},
		relaxSpeed: 4,
	},
	{
		depth: 0.5,
		img: {
			srcSet: "img/leafs/leaf-4.webp",
			src: "img/leafs/leaf-4.png",
		},
		relaxSpeed: 5,
	},
	{
		depth: 1,
		img: {
			srcSet: "img/leafs/leaf-5.webp",
			src: "img/leafs/leaf-5.png",
		},
		relaxSpeed: 2,
	},
	{
		img: {
			srcSet: "img/leafs/leaf-6.webp",
			src: "img/leafs/leaf-6.png",
		},
		relaxSpeed: 3,
	},
	{
		depth: 0.2,
		img: {
			srcSet: "img/leafs/leaf-7.webp",
			src: "img/leafs/leaf-7.png",
		},
		relaxSpeed: 1,
	},
	{
		depth: 0.5,
		img: {
			srcSet: "img/leafs/leaf-8.webp",
			src: "img/leafs/leaf-8.png",
		},
		relaxSpeed: 0.5,
	},
	{
		depth: 0.2,
		img: {
			srcSet: "img/leafs/leaf-9.webp",
			src: "img/leafs/leaf-9.png",
		},
		relaxSpeed: 0.1,
	},
];

const Adaptive = ({ media }: Props) => {
	const dispatch = useDispatch();
	const medias = Object.entries(Media).filter(
		(item) => typeof item[1] === "number"
	);

	const updateMedia = useCallback((number: number) => {
		dispatch(setMediaState(number));
	}, []);

	const leafsRef = useRef<HTMLDivElement>(null);
	const leafsArray: any = [];
	useEffect(() => {
		new Rellax(".relax");
		const leafs = leafsRef.current?.children;
		if(leafs) {
			Array.from(leafs).forEach(leaf => {
				const obj = new Parallax(leaf as HTMLElement);
				leafsArray.push(obj);
			})
		}
		
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
			if(leafsArray.length) {
				leafsArray.forEach((obj: any) => obj.disable());
			}
		};
	}, []);

	return (
		<div className="wrapper">
			<Header media={media} />
			<div className="leafs" ref={leafsRef}>
				{leafs.map((leaf, index) => {
					return (
						<div
							key={index}
							className={`leafs__item leafs__item--${index + 1}`}
						>
							<picture data-depth={leaf.depth ? leaf.depth : 0}>
								<source srcSet={leaf.img.srcSet} type="image/webp" />
								<img
									className={`leaf relax leaf--${index + 1}`}
									data-rellax-speed="2"
									src={leaf.img.src}
									alt=""
								/>
							</picture>
						</div>
					);
				})}
			</div>
			<main className="page">
				<MenuMobileUp media={media} />
				<Outlet />
			</main>
			<MenuMobileDown media={media} />
			<Footer />
		</div>
	);
};

export default Adaptive;
