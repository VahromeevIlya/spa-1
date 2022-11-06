import React from "react";
import { useSelector } from "react-redux";
import { Lazy, Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import ButtonCircle from "../../common/ButtonCircle";
import { mediaSize } from "../../redux/adaptive/selectors";
import { Media } from "../../redux/adaptive/types";

type Props = {};

const advantagesItems = [
	{
		img: "img/advantages/advantages-1.svg",
		title: "Защита собственности",
		text: `<strong>Мы страхуем каждый дом на первый год,</strong> вам не придется переживать за котельную и свой любимый дом`,
	},
	{
		img: "img/advantages/advantages-2.svg",
		title: "Экономия времени",
		text: `Проектируем и возводим за короткие сроки строго по
		всем правилам и нормам. Мы понимаем насколько важно
		поселиться для вас в новый дом поэтому используем
		умную логистику и быстрый монтаж`,
	},
	{
		img: "img/advantages/advantages-3.svg",
		title: "Мониторинг безопасности",
		text: `Мы удаленно мониторим ваш объект на предмет нештатных ситуаций`,
	},
	{
		img: "img/advantages/advantages-4.svg",
		title: "Круглосуточная поддержка",
		text: `Обеспечиваем поддержку 24/7`,
	},
	{
		img: "img/advantages/advantages-5.svg",
		title: "Быстрая помощь",
		text: `Приезжаем на объект в течении 2х часов`,
	},
	{
		img: "img/advantages/advantages-6.svg",
		title: "Дополнительная страховка",
		text: `В момент подписания договора гарантируем страхование
		от случайной ошибки наших работников`,
	},
];

const Advantages = (props: Props) => {
	const media = useSelector(mediaSize);

	if (media > Media.MOBILE) {
		return (
			<section className="advantages">
				<div className="advantages__container">
					<h2 className="advantages__title _title">
						Почему выбирают нас?
					</h2>
					<div className="advantages__slider ">
						<div className="advantages__swiper ">
							{advantagesItems.map((slide, index) => {
								return (
									<div key={index} className="advantages__slide">
										<div className="advantages__item">
											<div className="advantages__item-top">
												<div className="advantages__item-icon">
													<img src={slide.img} alt="" />
												</div>
												<div className="advantages__item-title">
													{slide.title}
												</div>
											</div>
											<p
												className="advantages__text"
												dangerouslySetInnerHTML={{
													__html: slide.text,
												}}
											></p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="advantages">
			<div className="advantages__container">
				<h2 className="advantages__title _title">Почему выбирают нас?</h2>
				<Swiper
					modules={[Navigation, Pagination, Lazy]}
					observer={true}
					observeParents={true}
					slidesPerView="auto"
					spaceBetween={30}
					speed={800}
					loop={false}
					pagination={{
						el: ".swiper-pagination",
						type: "fraction",
						formatFractionCurrent: function (number) {
							return number < 10 ? `0${number}` : number;
						},
						formatFractionTotal: function (number) {
							return number < 10 ? `0${number}` : number;
						},
					}}
					navigation={{
						nextEl: ".arrow--next",
						prevEl: ".arrow--prev",
					}}
					breakpoints={{
						320: {
							autoHeight: true,
						},
						480: {
							autoHeight: false,
						},
					}}
					className="advantages__slider"
				>
					{advantagesItems.map((slide, index) => {
						return (
							<SwiperSlide key={index} className="advantages__slide">
								<div className="advantages__item">
									<div className="advantages__item-top">
										<div className="advantages__item-icon">
											<img src={slide.img} alt="" />
										</div>
										<div className="advantages__item-title">
											{slide.title}
										</div>
									</div>
									<p
										className="advantages__text"
										dangerouslySetInnerHTML={{
											__html: slide.text,
										}}
									></p>
								</div>
							</SwiperSlide>
						);
					})}
					<div className="controllers">
						<ButtonCircle className="arrow arrow--prev _icon-arrow timer"/>
						<div className="swiper-pagination"></div>
						<ButtonCircle className="arrow arrow--next _icon-arrow timer"/>
					</div>
				</Swiper>
			</div>
		</section>
	);
};

export default Advantages;
