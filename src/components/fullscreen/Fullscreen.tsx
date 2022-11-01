import clsx from "clsx";
import React, { useRef } from "react";
import { useState } from "react";
import { Navigation, Pagination, EffectFade, Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slider } from "../../@types/slider";
import { isDesktop } from "../../utils/isDesktop";
import FullscreenControls from "./FullscreenControls";
import FullscreenInfo from "./FullscreenInfo";
import FullscreenSlide from "./FullscreenSlide";
import { mySlides } from "./Slides";
type Props = {};

const Fullscreen = (props: Props) => {
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

	function formatFraction(number: number | string) {
		return +number < 10 ? `0${number}` : number;
	}
	function autoplayStart(swiper: Slider) {
		swiper?.autoplay.start();
		setArrowNextHovered("");
	}
	function autoplayStop(swiper: Slider) {
		swiper?.autoplay.stop();
		setArrowNextHovered("hovered");
	}
	function handleSlideChange(swiper: Slider) {
		if (swiper) {
			let currentSlide = formatFraction(++swiper.realIndex);
			setCurrent(currentSlide);
		}
	}
	function updateCounter(swiper: Slider) {
		if (swiper?.destroyed === true) return;
		const number = formatFraction(swiper?.slides.length || 0);
		setTotal(number);
	}

	return (
		<section className="fullscreen">
			<Swiper
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				className="fullscreen__slider"
				modules={[Navigation, Pagination, EffectFade, Autoplay, Lazy]}
				effect="fade"
				autoplay={{
					disableOnInteraction: false,
					delay: 5000,
				}}
				fadeEffect={{ crossFade: true }}
				slidesPerView="auto"
				spaceBetween={30}
				speed={800}
				preloadImages={false}
				lazy={{ loadOnTransitionStart: true }}
				navigation={{
					nextEl: ".arrow--next",
					prevEl: ".arrow--prev",
				}}
				pagination={{
					el: ".swiper-pagination",
					type: "progressbar",
				}}
				breakpoints={{
					320: {
						allowTouchMove: true,
					},
					768: {
						allowTouchMove: false,
					},
				}}
				onInit={(swiper) => {
					setArrowNextActive("animating");
					updateCounter(swiper);
					autoplayStart(swiper);
				}}
				onTransitionStart={() => setArrowNextActive("")}
				onTransitionEnd={() => setArrowNextActive("animating")}
				onSlideChange={(swiper) => handleSlideChange(swiper)}
				onTouchStart={(swiper) => !isDesktop && autoplayStop(swiper)}
				onTouchEnd={(swiper) => !isDesktop && autoplayStart(swiper)}
			>
				{mySlides.map((slide, index) => {
					return (
						<SwiperSlide className="fullscreen__slide" key={index}>
							<FullscreenSlide {...slide} />
						</SwiperSlide>
					);
				})}
				<FullscreenControls
					isDesktop={isDesktop}
					autoplayStop={autoplayStop}
					autoplayStart={autoplayStart}
					total={total}
					current={current}
					clazzNextButton={clazzNextButton}
				/>
			</Swiper>
			<FullscreenInfo />
		</section>
	);
};

export default Fullscreen;
