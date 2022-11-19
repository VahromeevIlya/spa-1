import clsx from "clsx";
import { Field, Form, Formik, FormikHelpers, useField } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import PopupSuccess from "../popup/PopupSuccess";
import styles from "./portfolio.module.scss";
type Props = {};

const options = [
	{ value: "chocolate", label: "Газовая" },
	{ value: "strawberry", label: "Твердотопливная" },
	{ value: "vanilla", label: "Дизельная" },
];
interface Values {
	select: any;
	checkbox1: boolean;
	checkbox2: boolean;
	checkbox3: boolean;
}

function SelectField(props: any) {
	const [field, state, { setValue, setTouched }] = useField(props.name);
	const onChange = (value: any) => {
		setValue(value);
	};
	return (
		<Select
			options={options}
			defaultValue="chocolate"
			{...props}
			value={state?.value}
			isMulti
			onChange={onChange}
			onBlur={setTouched}
			styles={{
				control: (baseStyles, state) => ({
					...baseStyles,
					marginTop: "20px",
					minHeight: "60px",
					borderRadius: "100px",
					padding: "0 20px",
				}),
			}}
		/>
	);
}
const MyCheckbox = ({ children, ...props }: any) => {
	const [field, meta,{ setValue, setTouched }] = useField({ ...props, type: "checkbox" });
	console.log(field);
	
	return (
		<>
			<div className="checkbox">
				<label>
					<input className="checkbox__input" type="checkbox" {...field} {...props} />
					<div className="checkbox__label"></div>
					<span className="checkbox__text">{children}</span>
				</label>
			</div>
		</>
	);
};

const PortfolioForm = (props: Props) => {
	const [opened, setOpened] = useState(false);
	return (
		<div className="container">
			<div className={styles.form_shell}>
				<Formik
					initialValues={{
						select: options[0],
						checkbox1: false,
						checkbox2: false,
						checkbox3: false,
					}}
					onSubmit={(
						values: Values,
						{ setSubmitting, resetForm }: FormikHelpers<Values>
					) => {
						setTimeout(() => {
							setSubmitting(false);
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
							className={clsx(styles.form, isSubmitting && "submitting")}
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
										Выполните 2 простых действия и мы подберем для Вас
										лучшее решение
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
											<MyCheckbox name="checkbox1">Газовая</MyCheckbox>
											<MyCheckbox name="checkbox2">Твердотопливная</MyCheckbox>
											<MyCheckbox name="checkbox3">Дизельная</MyCheckbox>
											<Field
												className="checkbox__input"
												name="firstName"
												placeholder="Ваше имя*"
											/>
										</div>
										<div className={styles.form_select}>
											<SelectField name="select" />
										</div>
									</div>
									<div className={styles.form_line}>
										<button
											id="portfolio-button"
											type="submit"
											onClick={() => setOpened(true)}
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
				<PopupSuccess opened={opened} setOpened={setOpened} />
			</div>
		</div>
	);
};

export default PortfolioForm;
