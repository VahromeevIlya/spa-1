import React from "react";
import { EffectFade, Lazy, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioInnerSlide from "./PortfolioInnerSlide";
type Props = {};

const PortfolioSlides = [
	{
		img: [
			{
				defaultImage: "img/portfolio/portfolio-1.jpg",
				webp: "img/portfolio/portfolio-1.webp",
			},
			{
				defaultImage: "img/fullscreen/fullscreen-1.jpg",
				webp: "img/fullscreen/fullscreen-1.webp",
			},
			{
				defaultImage: "img/fullscreen/fullscreen-2.jpg",
				webp: "img/fullscreen/fullscreen-2.webp",
			},
			{
				defaultImage: "img/order/order.jpg",
				webp: "img/order/order.webp",
			},
		],
		title: "Проект котельной для дома в Ременниках",
		text: `Котельная создана по новейшим технологиям с
		внедрением экологически-чистых материалов.`,
		list: `	<li>
			<p>
				Жилая / общая площадь здания: <br />
				<strong>130 / 240 м2</strong>
			</p>
		</li>
		<li>
			<p>
				Мощность котельной: <br />
				<strong>4 КВт</strong>
			</p>
		</li>
		<li>
			<p>
				Габариты оборудования: <br />
				<strong>1.5м х 2.3м</strong>
			</p>
		</li>
		<li>
			<p>
				Вид топлива: <br />
				<strong>
					Природный газ среднего давления
				</strong>
			</p>
		</li>
		<li>
			<p>
				Тип котельной: <br />
				<strong>Водогрейная, газовая</strong>
			</p>
		</li>`,
	},
	{
		img: [
			{
				defaultImage: "img/portfolio/portfolio-1.jpg",
				webp: "img/portfolio/portfolio-1.webp",
			},
			{
				defaultImage: "img/fullscreen/fullscreen-1.jpg",
				webp: "img/fullscreen/fullscreen-1.webp",
			},
		],
		title: "Проект котельной для дома Рузвельтов",
		text: `Котельная создана по новейшим технологиям`,
		list: `<li>
				<p>
					Жилая / общая площадь здания: <br />
					<strong>130 / 240 м2</strong>
				</p>
			</li>
			<li>
				<p>
					Мощность котельной: <br />
					<strong>4 КВт</strong>
				</p>
			</li>`,
	},
];

const Portfolio = (props: Props) => {
	return (
		<section id="portfolio" className="portfolio">
			<div className="portfolio__container">
				<div className="portfolio__top">
					<h2 className="portfolio__title _title">Портфолио</h2>
					<div className="portfolio__arrows arrows">
						<button
							type="button"
							className="arrow arrow--prev arrow--portfolio _icon-arrow timer"
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
						<button
							type="button"
							className="arrow arrow--next arrow--portfolio _icon-arrow timer"
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
					</div>
				</div>
			</div>
			<Swiper
				className="portfolio__slider"
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
						<SwiperSlide key={index} className="portfolio__slide">
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
								className="portfolio__innerSlider portfolio-inner-slider"
							>
								{obj.img.map((item, index) => {
									return (
										<SwiperSlide
											key={index}
											className="portfolio-inner-slider__slide"
										>
											<PortfolioInnerSlide {...item} />
										</SwiperSlide>
									);
								})}

								<div className="portfolio-inner-slider__body">
									<div className="portfolio-inner-slider__title">
										{obj.title}
									</div>
									<div className="portfolio-inner-slider__subtitle">
										{obj.text}
									</div>
								</div>
								<div className="portfolio-inner-slider__arrows arrows">
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
							<div className="portfolio__container">
								<div className="portfolio__body">
									<div className="portfolio__text text">
										<ul
											dangerouslySetInnerHTML={{ __html: obj.list }}
										></ul>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="portfolio__container">
				<div className="portfolio__form-shell">
					<form action="#" className="portfolio__form portfolio-form">
						<div className="portfolio-form__left">
							<div className="portfolio-form__text text">
								<p>
									<span>Понравился проект?</span>
								</p>
								<h3>
									Рассчитайте стоимость собственного в
									<span>2 шага</span>
								</h3>
								<p>
									Выполните 2 простых действия и мы подберем для Вас
									лучшее решение
								</p>
							</div>
						</div>
						<div className="portfolio-form__right">
							<div className="portfolio-form__row">
								<div className="portfolio-form__line">
									<div className="portfolio-form__subtitle">
										Выберите тип котельной:
									</div>
									<div className="portfolio-form__checkboxes">
										<div className="checkbox">
											<label>
												<input
													checked
													data-error="Ошибка"
													className="checkbox__input"
													type="checkbox"
													value="Газовая"
													name="form[]"
												/>
												<div className="checkbox__label"></div>
												<span className="checkbox__text">
													Газовая
												</span>
											</label>
										</div>
										<div className="checkbox">
											<label>
												<input
													data-error="Ошибка"
													className="checkbox__input"
													type="checkbox"
													value="Твердотопливная"
													name="form[]"
												/>
												<div className="checkbox__label"></div>
												<span className="checkbox__text">
													Твердотопливная
												</span>
											</label>
										</div>
										<div className="checkbox">
											<label>
												<input
													data-error="Ошибка"
													className="checkbox__input"
													type="checkbox"
													value="Дизельная"
													name="form[]"
												/>
												<div className="checkbox__label"></div>
												<span className="checkbox__text">
													Дизельная
												</span>
											</label>
										</div>
									</div>
									<div className="portfolio-form__select">
										<select name="form[boiler]" className="boiler">
											<option value="Газовая" selected>
												Газовая
											</option>
											<option value="Твердотопливная">
												Твердотопливная
											</option>
											<option value="Дизельная">Дизельная</option>
										</select>
									</div>
								</div>
								<div className="portfolio-form__line">
									<button
										id="portfolio-button"
										type="button"
										data-popup="#callback"
										className="button button--small"
									>
										Узнать стоимость
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
