type Props = {
	setActive?: (bool: boolean) => void;
};
const ButtonHeader = ({ setActive }: Props) => {
	return (
		<button
			onClick={() => setActive && setActive(true)}
			type="button"
			className="header__callback _icon-phone-outline"
		>
			<span>ПЕРЕЗВОНИТЕ МНЕ</span>
		</button>
	);
};

export default ButtonHeader;
