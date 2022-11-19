import React from "react";
import { Lazy, Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import styles from "./portfolio.module.scss";
import PortfolioInnerSlide from "./PortfolioInnerSlide";

type Props = {
	obj: any;
};

const PortfolioInnerSlider = ({ obj }: Props) => {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Lazy]}
				observer={true}
				observeParents={true}
				slidesPerView="auto"
				spaceBetween={0}
				speed={800}
				nested={true}
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
					clickable: true,
				}}
				className={styles.inner_slider}
			>
				{obj.img.map((item: any, index: number) => {
					return (
						<SwiperSlide key={index} className={styles.inner_slide}>
							<PortfolioInnerSlide {...item} />
						</SwiperSlide>
					);
				})}

				<div className={styles.inner_body}>
					<div className={styles.inner_title}>{obj.title}</div>
					<div className={styles.inner_subtitle}>{obj.text}</div>
				</div>
				<div className={`${styles.arrows} arrows`}>
					<button
						type="button"
						className="arrow arrow--prev _icon-arrow"
					></button>
					<button
						type="button"
						className="arrow arrow--next _icon-arrow"
					></button>
				</div>
				<div className="swiper-pagination"></div>
			</Swiper>
			<div className={styles.container}>
				<div className={styles.body}>
					<div className={`${styles.text} text`}>
						<ul dangerouslySetInnerHTML={{ __html: obj.list }}></ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default PortfolioInnerSlider;
