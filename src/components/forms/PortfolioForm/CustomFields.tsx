import { useField } from "formik";
import Select from "react-select";
import { options } from "./PortfolioForm";
import { FormCallbackProps } from "./types";
import styles from "../../portfolio/portfolio.module.scss";

export const SelectField = (props: FormCallbackProps) => {
	const [field, state, { setValue, setTouched }] = useField(props.name);
	const onChange = (value: any) => {
		setValue(value);
	};
	const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		setTouched(true);
	};
	
	return (
		<>
			<Select
				options={options}
				name={props.name}
				value={field.value}
				isMulti
				onChange={onChange}
				onBlur={onBlur}
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
			{state.touched && state.error && (
				<div className={styles.error}>{state.error}</div>
			)}
		</>
	);
};
export const MyCheckbox = ({ children, ...props }: FormCallbackProps) => {
	const [field, meta, { setValue, setTouched }] = useField({
		...props,
		type: "checkbox",
	});
	return (
		<>
			<div className="checkbox">
				<label>
					<input
						className="checkbox__input"
						type="checkbox"
						{...field}
						{...props}
					/>
					<div className="checkbox__label"></div>
					<span className="checkbox__text">{children}</span>
				</label>
			</div>
		</>
	);
};
