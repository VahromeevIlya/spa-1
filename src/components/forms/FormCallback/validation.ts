import { FormikErrors } from "formik";
import { Values } from "./types";

export const validateForm = (values: Values) => {
	const errors: FormikErrors<Values> = {};
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
