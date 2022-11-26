import { useField } from "formik";
import Select from "react-select";
import { options } from "./PortfolioForm";

export const SelectField = (props: any) => {
	const [field, state, { setValue, setTouched }] = useField(props.name);
	const onChange = (value: any) => {
		setValue(value);
	};
	return (
		<Select
			options={options}
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
};
export const MyCheckbox = ({ children, ...props }: any) => {
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
