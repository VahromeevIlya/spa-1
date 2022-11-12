import clsx from "clsx";
import styles from './work.module.scss';

type Props = {
	step: number;
	img: { standard: string; webp: string };
	title: string;
	text: string;
};

const WorkSlide = ({ step, img, title, text }: Props) => {
	return (
		<>
			<div className={`ibg ${styles.image}`}>
				<picture>
					<source
						className="swiper-lazy"
						data-srcset={img.webp}
						type="image/webp"
					/>
					<img className="swiper-lazy" data-src={img.standard} alt="" />
				</picture>
			</div>
			<div className={styles.body}>
				<h2 className={`${styles.title} _title`}>{title}</h2>
				<div className={styles.steps}>
					{[...Array(5)].map((_, i) => (
						<div key={i} className={clsx(styles.step,step === i && '_active mobile', i < step && '_prev-active')}>
							<p>Шаг {i+1}</p>
						</div>
					))}
				</div>
				<div className={styles.text}>
					<p dangerouslySetInnerHTML={{ __html: text }}></p>
				</div>
			</div>
		</>
	);
};

export default WorkSlide;
