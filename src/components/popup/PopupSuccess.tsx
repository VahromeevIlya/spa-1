import { SimpleAnimatedModal } from "../SimpleAnimatedModal";

type Props = {
	opened: boolean;
	setOpened: (bool: boolean) => void;
};

const PopupSuccess = ({ opened, setOpened }: Props) => {
	return (
		<SimpleAnimatedModal opened={opened} onClose={() => setOpened(false)}>
			<div className="popup__body">
				<div className="form__headline headline">
					<h2 className="headline__title">Успешно!</h2>
					<p className="headline__subtitle">
						Спасибо за Ваше обращение. Менеджер свяжется с вами в
						ближайшее время!
					</p>
				</div>
				<div className="popup__button">
					<button
						type="button"
						data-close
						className="button button--large"
						onClick={() => setOpened(false)}
					>
						Закрыть
					</button>
				</div>
			</div>
		</SimpleAnimatedModal>
	);
};

export default PopupSuccess;
