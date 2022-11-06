import React, { useState } from "react";

import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Tippy from "@tippyjs/react";
import Popup from "../popup/Popup";

interface Values {
	firstName: string;
	phone: string;
}
type Props = {};

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, "Слишком короткое имя")
		.required("Обязательное поле"),
	phone: Yup.string()
		.matches(phoneRegExp, "Не правильный номер телефона")
		.required("Обязательное поле"),
});

const Order = (props: Props) => {
	const [active, setActive] = useState(false);

	return (
		<section id="order" className="order">
			<div className="order__image-ibg">
				<picture>
					<source srcSet="img/order/order.webp" type="image/webp" />
					<img src="img/order/order.jpg" alt="" />
				</picture>
			</div>
			<div className="order__container">
				<div className="order__grid">
					<Formik
						initialValues={{
							firstName: "",
							phone: "",
						}}
						validationSchema={SignupSchema}
						onSubmit={(
							values: Values,
							{ setSubmitting }: FormikHelpers<Values>
						) => {
							setTimeout(() => {
								setSubmitting(false);
								setActive(true);
								setTimeout(() => {
									setActive(false);
								},4000)
							}, 1000);
						}}
					>
						{({ errors, touched, isSubmitting }) => (
							<Form
								className={clsx(
									"order__form form",
									isSubmitting && "submitting"
								)}
							>
								<div className="form__headline headline headline--light">
									<h2 className="headline__title">
										Заказать котельную
									</h2>
									<p className="headline__subtitle">
										Оставьте свои контакты и наш менеджер свяжется с
										Вами в ближайшее время
									</p>
								</div>
								<div className="form__row">
									<div className="form__line">
										<Field
											className={clsx(
												"input",
												errors.firstName &&
													touched.firstName &&
													"wpcf7-not-valid"
											)}
											name="firstName"
											placeholder="Ваше имя*"
										/>
										<ErrorMessage name="firstName">
											{(msg) => (
												<Tippy className="tippy-my" content={msg}>
													<button
														type="button"
														className="wpcf7-not-valid-tip"
													></button>
												</Tippy>
											)}
										</ErrorMessage>
									</div>
									<div className="form__line">
										<Field
											className={clsx(
												"input",
												errors.phone &&
													touched.phone &&
													"wpcf7-not-valid"
											)}
											type="tel"
											name="phone"
											placeholder="Номер телефона*"
										/>
										<ErrorMessage name="phone">
											{(msg) => (
												<Tippy className="tippy-my" content={msg}>
													<button
														type="button"
														className="wpcf7-not-valid-tip"
													></button>
												</Tippy>
											)}
										</ErrorMessage>
									</div>
								</div>
								<div className="form__button">
									<button
										type="submit"
										className="button button--large"
									>
										Отправить
									</button>
								</div>
								<div className="form__agreement">
									Отправляя форму, Вы принимаете 
									<a href="/" target="_blank">
										условия пользовательского соглашения
									</a>
									и согласны с 
									<a href="/" target="_blank">
										политикой конфиденциальности
									</a>
									сайта
								</div>
							</Form>
						)}
					</Formik>
					<Popup active={active} setActive={setActive}>
						<div className="form__headline headline">
							<h2 className="headline__title">Успешно!</h2>
							<p className="headline__subtitle">
								Спасибо за Ваше обращение. Менеджер свяжется с вами в
								ближайшее время!
							</p>
						</div>
						<div className="popup__button">
							<button
								type="button"
								data-close
								className="button button--large"
								onClick={() => setActive(false)}
							>
								Закрыть
							</button>
						</div>
					</Popup>
				</div>
			</div>
		</section>
	);
};

export default Order;
