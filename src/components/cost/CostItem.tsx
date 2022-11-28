import styles from './cost.module.scss';
import buttonStyles from '../../scss/base/forms/button.module.scss';


type Props = {
	img: string[];
	title: string;
	subtitle: string;
	time: string;
	equipment: string;
	description: string;
	price: string;
	setOpened: (b: boolean) => void;
};

const CostItem = ({
	img,
	title,
	subtitle,
	time,
	equipment,
	description,
	price,
	setOpened
}: Props) => {
	return (
		<div className={styles.card}>
			<div className={`ibg ${styles.image}`}>
				<picture>
					<source srcSet={img[1]} type="image/webp" />
					<img src={img[0]} alt="" />
				</picture>
			</div>
			<div className={styles.shell}>
				<div className={styles.body}>
					<div className={styles.headline}>
						<div className={styles.card_title} dangerouslySetInnerHTML={{ __html: title }}>
						</div>
						<div className={styles.subtitle}>
							{subtitle}
						</div>
					</div>
					<div className={`${styles.card_text} text`}>
						<hr />
						<ul>
							<li>
								Длительность создание проекта: <br />
								<strong>{time}</strong>
							</li>
							<li>
								Оборудование: <br />
								<strong>{equipment}</strong>
							</li>
						</ul>
						<hr />
						<h4>Описание:</h4>
						<p  dangerouslySetInnerHTML={{ __html: description }}>
						</p>
					</div>
				</div>
				<div className={styles.order}>
					<div className={styles.price}>{price}</div>
					<div className={styles.button}>
						<button
							type="button"
							onClick={() => setOpened(true)}
							className={buttonStyles.button}
						>
							Заказать котельную
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CostItem;
