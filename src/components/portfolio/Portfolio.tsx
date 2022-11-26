import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioForm from "../forms/PortfolioForm/PortfolioForm";
import styles from "./portfolio.module.scss";
import PortfolioInnerSlider from "./PortfolioInnerSlider";
import PortfolioTop from "./PortfolioTop";
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
			<div className="container">
				<div className={styles.form_shell}>
					<PortfolioForm/>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
