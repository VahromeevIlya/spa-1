import Tippy from "@tippyjs/react";
import clsx from "clsx";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { PhoneInput, validateFrom1, Values } from "../order/Order";
import { SimpleAnimatedModal } from "../SimpleAnimatedModal";
import Popup from "./Popup";

type Props = {
	active: boolean;
	setActive: (bool: boolean) => void;
};

const PopupCallback = ({ active, setActive }: Props) => {
	return (
		<SimpleAnimatedModal opened={active} onClose={() => setActive(false)}>
			<button type="button" onClick={() => setActive(false)} className="popup__close"></button>
			<div className="popup__body form form--dark">
				<Formik
					initialValues={{
						firstName: "",
						phone: "",
					}}
					validate={validateFrom1}
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
								"form form--dark",
								isSubmitting && "submitting"
							)}
						>
							<div className="form__headline headline">
								<h2 className="headline__title">Заказать котельную</h2>
								<p className="headline__subtitle">
									Оставьте свои контакты и наш менеджер свяжется с Вами
									в ближайшее время
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
									{/*<Field
											className={clsx(
												"input",
												errors.phone &&
													touched.phone &&
													"wpcf7-not-valid"
											)}
											type="tel"
											name="phone"
											placeholder="Номер телефона*"
										/>*/}
									<PhoneInput name="phone" />
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
								<button type="submit" className="button button--large">
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
			</div>
		</SimpleAnimatedModal>
	);
};

export default PopupCallback;
