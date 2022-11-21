import { useState } from "react";
import styles from './order.module.scss';
import PopupSuccess from "../popup/PopupSuccess";
import FormCallback from "../forms/FormCallback/FormCallback";


type Props = {};



const Order = (props: Props) => {
	const [opened, setOpened] = useState(false);

	return (
		<section id="order" className={styles.section}>
			<div className={`${styles.image} ibg`}>
				<picture>
					<source srcSet="img/order/order.webp" type="image/webp" />
					<img src="img/order/order.jpg" alt="" />
				</picture>
			</div>
			<div className="container">
				<div className={styles.grid}>
					<FormCallback opened={opened} setOpened={setOpened} classForm={styles.form} classHeadline="light"/>
					<PopupSuccess opened={opened} setOpened={setOpened} />
				</div>
			</div>
		</section>
	);
};

export default Order;
