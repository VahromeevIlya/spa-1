import Popup from "./Popup";

type Props = {
	active: boolean;
	setActive: (bool: boolean) => void;
};

const PopupSuccess = ({ active, setActive }: Props) => {
	return (
		<Popup active={active} setActive={setActive}>
			<div className="form__headline headline">
				<h2 className="headline__title">Успешно!</h2>
				<p className="headline__subtitle">
					Спасибо за Ваше обращение. Менеджер свяжется с вами в ближайшее
					время!
				</p>
			</div>
			<div className="popup__button">
				<button
					type="button"
					data-close
					className="button button--large"
					onClick={() => setActive(false)}
				>
					Закрыть
				</button>
			</div>
		</Popup>
	);
};

export default PopupSuccess;
