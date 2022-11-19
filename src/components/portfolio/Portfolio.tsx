import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./portfolio.module.scss";
import PortfolioInnerSlider from "./PortfolioInnerSlider";
import PortfolioTop from "./PortfolioTop";
import PortfolioForm from "./PortfolioForm";
import { PortfolioSlides } from "./Slides";

type Props = {};

const Portfolio = (props: Props) => {
	return (
		<section id="portfolio" className={styles.section}>
			<PortfolioTop />
			<Swiper
				className={styles.slider}
				modules={[Navigation, EffectFade]}
				effect="fade"
				fadeEffect={{
					crossFade: true,
				}}
				observer={true}
				observeParents={true}
				slidesPerView="auto"
				spaceBetween={0}
				speed={800}
				navigation={{
					nextEl: ".arrow--next.arrow--portfolio",
					prevEl: ".arrow--prev.arrow--portfolio",
				}}
				breakpoints={{
					320: {
						autoHeight: true,
						allowTouchMove: true,
					},
					768: {
						autoHeight: false,
						allowTouchMove: false,
					},
				}}
			>
				{PortfolioSlides.map((obj, index) => {
					return (
						<SwiperSlide key={index} className={styles.slide}>
							<PortfolioInnerSlider obj={obj} />
						</SwiperSlide>
					);
				})}
			</Swiper>
			<PortfolioForm />
		</section>
	);
};

export default Portfolio;
