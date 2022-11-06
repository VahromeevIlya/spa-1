import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { SwiperOptions } from "swiper";
import { type Swiper as SwiperRef } from "swiper";
import { Swiper } from "swiper/react";
import { AutoplayOptions } from "swiper/types";
import { Slider } from "../@types/slider";
import { isDesktop } from "../utils/isDesktop";
import SliderControls from "./SliderControls";

type Props = {
	className?: string;
	controlsContainerClass: string;
	swiperOption: SwiperOptions;
	children?: React.ReactNode;
};

const SliderWithControls = ({
	className,
	controlsContainerClass,
	swiperOption,
	children,
}: Props) => {
	const [arrowNextActive, setArrowNextActive] = useState("");
	const [arrowNextHovered, setArrowNextHovered] = useState("");
	const [total, setTotal] = useState<number | string>("02");
	const [current, setCurrent] = useState<number | string>("01");
	const swiperRef = useRef<Slider>(null);
	let clazzNextButton = clsx(
		"arrow arrow--next _icon-arrow timer",
		arrowNextActive === "animating" && " animating",
		arrowNextHovered === "hovered" && " hovered"
	);
	const propsSwiper = {
		...swiperOption,
		onSwiper: (swiper: SwiperRef) => {
			swiperRef.current = swiper;
		},
		onInit: (swiper: SwiperRef) => {
			setArrowNextActive("animating");
			updateCounter(swiper);
			autoplayStart(swiper);
		},
	} as SwiperOptions;
	const propsControls = {
		isDesktop,
		autoplayStop,
		autoplayStart,
		total,
		current,
		clazzNextButton,
		controlsContainerClass,
	};
	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.on("slideChange", function () {
				handleSlideChange(swiperRef.current);
			});
			swiperRef.current.on("transitionStart", function () {
				setArrowNextActive("");
			});

			swiperRef.current.on("transitionEnd", function () {
				setArrowNextActive("animating");
			});
			swiperRef.current.on("touchStart", function () {
				!isDesktop && autoplayStop(swiperRef.current);
			});
			swiperRef.current.on("touchEnd", function () {
				!isDesktop && autoplayStart(swiperRef.current);
			});
		}
	}, [swiperRef]);
	function formatFraction(number: number | string) {
		return +number < 10 ? `0${number}` : number;
	}
	function autoplayStart(swiper: Slider) {
		if (swiper?.params.autoplay) {
			const params = swiper.params.autoplay as AutoplayOptions;
			if (params.delay && params.disableOnInteraction) {
				params.delay = 5000;
				params.disableOnInteraction = false;
			}
		}
		swiper?.autoplay.start();
		setArrowNextHovered("");
	}
	function autoplayStop(swiper: Slider) {
		swiper?.autoplay.stop();
		setArrowNextHovered("hovered");
	}
	function handleSlideChange(swiper: Slider) {
		swiper && setCurrent(formatFraction(++swiper.realIndex));
	}
	function updateCounter(swiper: Slider) {
		if (swiper?.destroyed === true) return;
		const number = formatFraction(swiper?.slides.length || 0);
		setTotal(number);
	}
	return (
		<Swiper className={className ? className : ""} {...propsSwiper}>
			{children ? children : null}
			<SliderControls {...propsControls} />
		</Swiper>
	);
};

export default SliderWithControls;
