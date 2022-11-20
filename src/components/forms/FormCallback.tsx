import Tippy from "@tippyjs/react";
import {
	Formik,
	Field,
	Form,
	FormikHelpers,
	ErrorMessage,
	useField,
} from "formik";
import clsx from "clsx";

export interface Values {
	firstName: string;
	phone: string;
}
type Props = {
	opened: boolean;
	setOpened: (bool: boolean) => void;
	classForm: string;
	classHeadline?: string;
};

export const PhoneInput = (props: any) => {
	const [field, meta, helpers] = useField(props.name);
	function handlePhoneKeyDown(event: any) {
		let inputValue = event.target.value.replace(/\D/g, "");
		if (event.keyCode == 8 && inputValue.length == 1) {
			helpers.setValue("", false);
		}
	}
	function handlePhoneChange(event: any) {
		const input = event.target;
		let value: any = event.target.value,
			inputNumbersValue = value.replace(/\D/g, ""),
			selectionStart = input.selectionStart,
			formattedInputValue = "";
		if (!inputNumbersValue) {
			return helpers.setValue("", false);
		}

		if (input.value.length != selectionStart) {
			// Editing in the middle of input, not last symbol
			if (event.data && /\D/g.test(event.data)) {
				// Attempt to input non-numeric symbol
				helpers.setValue(inputNumbersValue);
			}
			return;
		}

		if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
			if (inputNumbersValue[0] == "9")
				inputNumbersValue = "7" + inputNumbersValue;
			let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
			helpers.setValue(firstSymbols + " ", false);
			formattedInputValue = firstSymbols + " ";
			if (inputNumbersValue.length > 1) {
				formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
			}
			if (inputNumbersValue.length >= 5) {
				formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
			}
			if (inputNumbersValue.length >= 8) {
				formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
			}
			if (inputNumbersValue.length >= 10) {
				formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
			}
		} else {
			formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
		}
		let shouldValidate = false;
		if (
			(formattedInputValue.substring(0, 2) === "+7" &&
				formattedInputValue.length === 18) ||
			(formattedInputValue.substring(0, 1) === "8" &&
				formattedInputValue.length === 17) ||
			(formattedInputValue.substring(0, 1) === "+" &&
				formattedInputValue.substring(0, 2) !== "+7" &&
				formattedInputValue.length > 10)
		) {
			shouldValidate = true;
		}

		helpers.setValue(formattedInputValue, shouldValidate);
	}
	function handePhonePaste(event: any) {
		let value: any = event.target.value;
		let input = event.target,
			inputNumbersValue = value.replace(/\D/g, "");
		let pasted = event.clipboardData;
		if (pasted) {
			let pastedText = pasted.getData("Text");
			if (/\D/g.test(pastedText)) {
				helpers.setValue(inputNumbersValue, false);
				return;
			}
		}
	}
	return (
		<>
			<input
				name={field.name}
				type="tel"
				className={clsx(
					"input",
					meta.error && meta.touched && "wpcf7-not-valid"
				)}
				value={meta.value}
				placeholder="Номер телефона*"
				onBlur={() => helpers.setTouched(true, true)}
				onChange={(event) => handlePhoneChange(event)}
				onKeyDown={(event) => handlePhoneKeyDown(event)}
				onPaste={(event) => handePhonePaste(event)}
			/>
		</>
	);
};
export const validateFrom1 = (values: any) => {
	const errors: any = {};
	const { firstName, phone } = values;

	if (firstName.length < 2 && firstName.length > 0) {
		errors.firstName = "Слишком короткое имя";
	} else if (firstName.length < 1) {
		errors.firstName = "Обязательное поле";
	}

	if (phone.length < 1) {
		errors.phone = "Обязательное поле";
	}
	if (
		(phone.substring(0, 2) === "+7" && phone.length < 18) ||
		(phone.substring(0, 1) === "8" && phone.length < 17) ||
		(phone.substring(0, 1) === "+" &&
			phone.substring(0, 2) !== "+7" &&
			phone.length < 10)
	) {
		errors.phone = "Введите корректный номер";
	}

	return errors;
};

const FormCallback = ({ opened, setOpened,classForm,classHeadline }: Props) => {
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
						`${classForm} form`,
						isSubmitting && "submitting"
					)}
				>
					<div className={`form__headline headline ${classHeadline}`}>
						<h2 className="headline__title">Заказать котельную</h2>
						<p className="headline__subtitle">
							Оставьте свои контакты и наш менеджер свяжется с Вами в
							ближайшее время
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
	);
};

export default FormCallback;
