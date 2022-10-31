import clsx from "clsx";
import React, { useRef } from "react";
import { useState } from "react";
import { Navigation, Pagination, EffectFade, Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slider } from "../../@types/slider";

type Props = {};

type Slide = {
	img: string;
	text: string;
	link: string;
};

const mySlides: Slide[] = [
	{
		img: "img/fullscreen/fullscreen-1.jpg",
		text: "Мы <span>создаем тепло</span> в вашем доме <span>профессионально</span>",
		link: "https://www.google.com/",
	},
	{
		img: "img/fullscreen/fullscreen-2.jpg",
		text: "Мы <span>создаем тепло</span> в вашем доме",
		link: "https://www.google.com/",
	},
	{
		img: "img/fullscreen/fullscreen-1.jpg",
		text: "Мы в вашем доме",
		link: "https://www.google.com/",
	},
];

const Fullscreen = (props: Props) => {
	const isDesktop = true;
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
				onInit={function (swiper) {
					setArrowNextActive("animating");
					updateCounter(swiper);
					autoplayStart(swiper);
				}}
				onTransitionStart={() => setArrowNextActive("")}
				onTransitionEnd={() => setArrowNextActive("animating")}
				onSlideChange={(swiper) => handleSlideChange(swiper)}
				onTouchStart={function (swiper) {
					if (!isDesktop) {
						autoplayStop(swiper);
					}
				}}
				onTouchEnd={function (swiper) {
					if (!isDesktop) {
						autoplayStart(swiper);
					}
				}}
			>
				{mySlides.map((slide, index) => {
					return <SwiperSlide key={index} className="fullscreen__slide">
						<div className="fullscreen__background-ibg">
							<img className="swiper-lazy" data-src={slide.img} alt="" />
						</div>
						<div className="fullscreen__container">
							<div className="fullscreen__body">
								<p dangerouslySetInnerHTML={{__html: slide.text}}></p>
								<a
									href={slide.link}
									target="_blank"
									rel="noreferrer"
									className="button fullscreen__button"
								>
									Получить расчет
								</a>
							</div>
						</div>
					</SwiperSlide>;
				})}
				<div
					className="controls"
					onMouseEnter={() => {
						if (isDesktop) {
							autoplayStop(swiperRef.current);
						}
					}}
					onMouseLeave={() => {
						if (isDesktop) {
							autoplayStart(swiperRef.current);
						}
					}}
				>
					<div className="controls__container">
						<div className="controls__grid">
							<div className="swiper-pagination"></div>
							<div className="fraction">
								<span className="fraction__current">{current}</span>/
								<span className="fraction__total">{total}</span>
							</div>
							<div className="arrows">
								<button
									type="button"
									className="arrow arrow--prev _icon-arrow timer"
								>
									<svg>
										<circle
											className="timer__background"
											cx="20"
											cy="20"
											r="19"
										></circle>
										<circle
											className="timer__progress"
											cx="20"
											cy="20"
											r="19"
										></circle>
									</svg>
								</button>
								<button type="button" className={clazzNextButton}>
									<svg>
										<circle
											className="timer__background"
											cx="20"
											cy="20"
											r="19"
										></circle>
										<circle
											className="timer__progress"
											cx="20"
											cy="20"
											r="19"
										></circle>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</Swiper>
			<div className="fullscreen__info">
				<div className="fullscreen__container">
					<div className="fullscreen__info-block">
						<div className="pulse-box">
							<svg
								className="pulse-svg"
								width="50"
								height="50"
								viewBox="0 0 50 50"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									className="circle first-circle"
									cx="25"
									cy="25"
									r="25"
								></circle>
								<circle
									className="circle second-circle"
									cx="25"
									cy="25"
									r="25"
								></circle>
								<circle
									className="circle third-circle"
									cx="25"
									cy="25"
									r="25"
								></circle>
								<circle
									className="circle"
									fill="white"
									cx="25"
									cy="25"
									r="25"
								></circle>
							</svg>
						</div>
						<p>
							Мы страхуем каждый дом на первый год, вам не придется
							переживать за котельную и свой любимый дом
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Fullscreen;
