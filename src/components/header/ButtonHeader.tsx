import styles from './header.module.scss';

type Props = {
	setOpened?: (bool: boolean) => void;
};
const ButtonHeader = ({ setOpened }: Props) => {
	return (
		<button
			onClick={() => setOpened && setOpened(true)}
			type="button"
			className={`${styles.callback} _icon-phone-outline`}
		>
			<span>ПЕРЕЗВОНИТЕ МНЕ</span>
		</button>
	);
};

export default ButtonHeader;
