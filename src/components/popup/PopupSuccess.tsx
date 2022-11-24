import { SimpleAnimatedModal } from "../SimpleAnimatedModal";
import styles from '../forms/form.module.scss';
import buttonStyles from '../../scss/base/forms/button.module.scss';
type Props = {
	opened: boolean;
	setOpened: (bool: boolean) => void;
};

const PopupSuccess = ({ opened, setOpened }: Props) => {
	return (
		<SimpleAnimatedModal opened={opened} onClose={() => setOpened(false)}>
			<div className="popup__body">
				<div className={styles.headline}>
					<h2 className={styles.title}>Успешно!</h2>
					<p className={styles.subtitle}>
						Спасибо за Ваше обращение. Менеджер свяжется с вами в
						ближайшее время!
					</p>
				</div>
				<div className="popup__button">
					<button
						type="button"
						data-close
						className={`${buttonStyles.button} ${buttonStyles.large}`}
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
