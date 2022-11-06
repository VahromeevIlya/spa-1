import {
	Autoplay,
	EffectFade,
	Lazy,
	Navigation,
	Pagination,
	SwiperOptions,
} from "swiper";
import { SwiperSlide } from "swiper/react";
import SliderWithControls from "../../common/SliderWithControls";
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
	const propsSwiper = {
		modules: [Navigation, Pagination, EffectFade, Autoplay, Lazy],
		slidesPerView: "auto",
		spaceBetween: 50,
		speed: 800,
		effect: "fade",
		observer: true,
		observeParents: true,
		autoHeight: true,
		fadeEffect: { crossFade: true },
		preloadImages: false,
		lazy: { checkInView: true, loadOnTransitionStart: true },
		navigation: {
			nextEl: ".arrow--next",
			prevEl: ".arrow--prev",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
		},
		breakpoints: {
			320: {
				allowTouchMove: true,
			},
			768: {
				allowTouchMove: false,
			},
		},
	} as SwiperOptions;

	return (
		<section className="work">
			<div className="work__container">
				<SliderWithControls
					className="work__slider"
					controlsContainerClass="controls__shell"
					swiperOption={propsSwiper}
				>
					{WorkSlides.map((obj, index) => {
						return (
							<SwiperSlide className="work__slide" key={index}>
								<WorkSlide step={index} {...obj} />
							</SwiperSlide>
						);
					})}
				</SliderWithControls>
			</div>
		</section>
	);
};

export default Work;
