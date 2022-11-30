import { FormikErrors } from "formik";
import { Values } from "./types";

export const validateForm = (values: Values) => {
	const errors: FormikErrors<Values> = {};
	const { select, checked } = values;

	if (window.innerWidth < 767.98) {
		
		if (!select || select.length === 0) {
			console.log(select);
			errors.select = "Выберите минимум 1 тип";
		}
	} else {
		if (checked.length === 0) {
			errors.checked = "Выберите минимум 1 тип";
		}
	}

	return errors;
};
