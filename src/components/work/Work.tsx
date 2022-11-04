import clsx from "clsx";
import React, { useRef, useState } from "react";
import { Autoplay, EffectFade, Lazy, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slider } from "../../@types/slider";
import { isDesktop } from "../../utils/isDesktop";
import WorkControls from "./WorkControls";
import WorkSlide from "./WorkSlide";

type Props = {};

const WorkSlides = [
	{
		img: {
			standard: "img/work/work-1.jpg",
			webp: "img/work/work-1.webp",
		},
		title: "Как мы работаем",
		text: `<strong>Вы приходите к нам</strong>, или вызываете
		нашего профильного инженера к вам на объект и
		рассказываете о своих желаниях. Менеджер внимательно
		выслушивает и дает эффективное
		<strong>решение</strong>`,
	},
	{
		img: {
			standard: "img/order/order.jpg",
			webp: "img/order/order.webp",
		},
		title: "Почему выбирают нас",
		text: "<strong>Вы приходите к нам</strong>",
	},
	{
		img: {
			standard: "img/fullscreen/fullscreen-1.jpg",
			webp: "img/fullscreen/fullscreen-1.webp",
		},
		title: "Бюджетно",
		text: `<strong>Мы приходим к вам</strong>
		Lorem, ipsum dolor sit amet consectetur adipisicing
		elit. Unde nisi temporibus voluptatem deserunt omnis
		illum, maxime consectetur ipsam explicabo totam ipsa
		dolores nostrum, minima, quae excepturi atque?
		Veritatis nemo doloremque corporis et dolorum
		molestiae dolorem, commodi repudiandae atque
		voluptas, non excepturi nulla consequuntur! Autem,
		qui veritatis architecto vel temporibus consectetur.`,
	},
	{
		img: {
			standard: "img/fullscreen/fullscreen-2.jpg",
			webp: "img/fullscreen/fullscreen-2.webp",
		},
		title: "Качественно",
		text: `Lorem ipsum, dolor sit amet consectetur adipisicing
		elit. Laboriosam quae explicabo architecto
		accusantium commodi recusandae minima dolorum at quo
		veritatis?`,
	},
	{
		img: {
			standard: "img/cost/cost-1.jpg",
			webp: "img/cost/cost-1.webp",
		},
		title: "Надежно",
		text: `Lorem ipsum, dolor sit amet consectetur adipisicing
		elit. Laboriosam quae explicabo architecto
		accusantium commodi recusandae minima dolorum at quo
		veritatis?`,
	},
];

const Work = (props: Props) => {
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
		<section className="work">
			<div className="work__container">
				<Swiper 
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				modules={[Navigation, Pagination, EffectFade, Autoplay,Lazy]}
				effect="fade"
				fadeEffect={{
					crossFade: true,
				}}
				autoplay={{
					disableOnInteraction: false,
					delay: 5000,
				}}
				observer={true}
				observeParents={true}
				slidesPerView="auto"
				spaceBetween={30}
				speed={800}
				autoHeight={true}
				preloadImages={false}
				lazy={{
					checkInView: true,
					loadOnTransitionStart: true,
				}}
				navigation={{
					nextEl: ".arrow--next",
					prevEl: ".arrow--prev",
				}}
				pagination={{
					el: ".swiper-pagination",
					type: "progressbar",
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

				className="work__slider">
					{WorkSlides.map((obj, index) => {
						return (
							<SwiperSlide className="work__slide" key={index}>
								<WorkSlide step={index} {...obj} />
							</SwiperSlide>
						);
					})}
					<WorkControls 
					isDesktop={isDesktop}
					autoplayStop={autoplayStop}
					autoplayStart={autoplayStart}
					total={total}
					current={current}
					clazzNextButton={clazzNextButton}
					/>
				</Swiper>
			</div>
		</section>
	);
};

export default Work;
