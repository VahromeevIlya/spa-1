import clsx from "clsx";
import { useField } from "formik";
import styles from "../form.module.scss";

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
					styles.input,
					meta.error && meta.touched && styles.error
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