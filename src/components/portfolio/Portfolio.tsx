import clsx from "clsx";
import {
	ErrorMessage,
	Field,
	Form,
	Formik,
	FormikHelpers,
	useField,
} from "formik";
import { useState } from "react";
import Select from "react-select";
import { EffectFade, Lazy, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonCircle from "../../common/ButtonCircle";
import PortfolioInnerSlide from "./PortfolioInnerSlide";
import styles from './portfolio.module.scss';
import PopupSuccess from "../popup/PopupSuccess";

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

interface Values {
	select: any;
	checkbox: any;
}

const options = [
	{ value: "chocolate", label: "Газовая" },
	{ value: "strawberry", label: "Твердотопливная" },
	{ value: "vanilla", label: "Дизельная" },
];



function SelectField(props: any) {
	
	const [field, state, { setValue, setTouched }] = useField(
		props.name
	);

	// value is an array now
	const onChange = (value: any) => {
		setValue(value);
	};

	// use value to make this a  controlled component
	// now when the form receives a value for 'campfeatures' it will populate as expected
	return (
		<Select
			options={options}
			defaultValue="chocolate"
			{...props}
			value={state?.value}
			isMulti
			onChange={onChange}
			onBlur={setTouched}
		/>
	);
}

const Portfolio = (props: Props) => {
	const [active, setActive] = useState(false);
	return (
		<section id="portfolio" className={styles.section}>
			<div className="container">
				<div className={styles.top}>
					<h2 className={`${styles.title} _title`}>Портфолио</h2>
					<div className="portfolio__arrows arrows">
						<ButtonCircle className="arrow arrow--prev arrow--portfolio _icon-arrow timer" />
						<ButtonCircle className="arrow arrow--next arrow--portfolio _icon-arrow timer" />
					</div>
				</div>
			</div>
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
								{obj.img.map((item, index) => {
									return (
										<SwiperSlide
											key={index}
											className={styles.inner_slide}
										>
											<PortfolioInnerSlide {...item} />
										</SwiperSlide>
									);
								})}

								<div className={styles.inner_body}>
									<div className={styles.inner_title}>
										{obj.title}
									</div>
									<div className={styles.inner_subtitle}>
										{obj.text}
									</div>
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
			<div className="container">
				<div className={styles.form_shell}>
					<Formik
						initialValues={{
							select: options[0],
							checkbox: "",
						}}
						onSubmit={(
							values: Values,
							{ setSubmitting, resetForm }: FormikHelpers<Values>
						) => {
							setTimeout(() => {
								setSubmitting(false);
								setActive(true);
								resetForm();
								setTimeout(() => {
									setActive(false);
								}, 4000);
							}, 1000);
						}}
					>
						{({ errors, touched, isSubmitting }) => (
							<Form
								className={clsx(
									styles.form,
									isSubmitting && "submitting"
								)}
							>
								<div className={styles.form_left}>
									<div className="portfolio-form__text text">
										<p>
											<span>Понравился проект?</span>
										</p>
										<h3>
											Рассчитайте стоимость собственного в
											<span>2 шага</span>
										</h3>
										<p>
											Выполните 2 простых действия и мы подберем для
											Вас лучшее решение
										</p>
									</div>
								</div>
								<div className={styles.form_right}>
									<div className={styles.form_row}>
										<div className={styles.form_line}>
											<div className={styles.form_subtitle}>
												Выберите тип котельной:
											</div>
											<div className={styles.form_checkboxes}>
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
												<Field
													className="checkbox__input"
													name="firstName"
													placeholder="Ваше имя*"
												/>
											</div>
											<div className={styles.form_select}>
												<SelectField name="select"/>
												<select
													name="form[boiler]"
													className="boiler"
												>
													<option value="Газовая" selected>
														Газовая
													</option>
													<option value="Твердотопливная">
														Твердотопливная
													</option>
													<option value="Дизельная">
														Дизельная
													</option>
												</select>
											</div>
										</div>
										<div className={styles.form_line}>
											<button
												id="portfolio-button"
												type="submit"
												onClick={() => setActive(true)}
												className="button button--small"
											>
												Узнать стоимость
											</button>
										</div>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
			<PopupSuccess active={active} setActive={setActive} />
		</section>
	);
};

export default Portfolio;
