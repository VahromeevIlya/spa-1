import Tippy from "@tippyjs/react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import clsx from "clsx";
import { Props, Values } from "./types";
import { validateFrom1 } from "./validation";
import { PhoneInput } from "./CustomFields";
import styles from "../form.module.scss";
import buttonStyles from '../../../scss/base/forms/button.module.scss';

const FormCallback = ({
	opened,
	setOpened,
	classForm,
	classHeadline,
	closeCallback,
}: Props) => {
	return (
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
					if (typeof closeCallback === "function") closeCallback();
					setOpened(true);
					resetForm();
					setTimeout(() => {
						setOpened(false);
					}, 4000);
				}, 1000);
			}}
		>
			{({ errors, touched, isSubmitting }) => (
				<Form
					className={clsx(
						`${classForm} ${styles.form}`,
						isSubmitting && "submitting"
					)}
				>
					<div className={`${styles.headline} ${classHeadline}`}>
						<h2 className={styles.title}>Заказать котельную</h2>
						<p className={styles.subtitle}>
							Оставьте свои контакты и наш менеджер свяжется с Вами в
							ближайшее время
						</p>
					</div>
					<div className={styles.row}>
						<div className={styles.line}>
							<Field
								className={clsx(
									styles.input,
									errors.firstName &&
										touched.firstName &&
										styles.error
								)}
								name="firstName"
								placeholder="Ваше имя*"
							/>
							<ErrorMessage name="firstName">
								{(msg) => (
									<Tippy className={styles.tippy} content={msg}>
										<button
											type="button"
											className={styles.error_icon}
										></button>
									</Tippy>
								)}
							</ErrorMessage>
						</div>
						<div className={styles.line}>
							<PhoneInput name="phone" />
							<ErrorMessage name="phone">
								{(msg) => (
									<Tippy className={styles.tippy} content={msg}>
										<button
											type="button"
											className={styles.error_icon}
										></button>
									</Tippy>
								)}
							</ErrorMessage>
						</div>
					</div>
					<div className={styles.form_button}>
						<button type="submit" className={`${buttonStyles.button} ${buttonStyles.large}`}>
							Отправить
						</button>
					</div>
					<div className={styles.agreement}>
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
	);
};

export default FormCallback;
