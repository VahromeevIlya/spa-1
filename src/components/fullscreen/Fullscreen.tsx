import {
	Navigation,
	Pagination,
	EffectFade,
	Autoplay,
	Lazy,
	SwiperOptions,
} from "swiper";
import { SwiperSlide } from "swiper/react";
import SliderWithControls from "../../common/SliderWithControls";
import FullscreenInfo from "./FullscreenInfo";
import FullscreenSlide from "./FullscreenSlide";
import { mySlides } from "./Slides";
type Props = {};

const Fullscreen = (props: Props) => {
	const propsSwiper = {
		modules: [Navigation, Pagination, EffectFade, Autoplay, Lazy],
		slidesPerView: "auto",
		spaceBetween: 50,
		speed: 800,
		effect: "fade",
		fadeEffect: { crossFade: true },
		preloadImages: false,
		lazy: { loadOnTransitionStart: true },
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
		<section className="fullscreen">
			<SliderWithControls
				className="fullscreen__slider"
				controlsContainerClass="controls__container"
				swiperOption={propsSwiper}
			>
				{mySlides.map((obj, index) => {
					return (
						<SwiperSlide className="fullscreen__slide" key={index}>
							<FullscreenSlide {...obj} />
						</SwiperSlide>
					);
				})}
			</SliderWithControls>
			<FullscreenInfo />
		</section>
	);
};

export default Fullscreen;
