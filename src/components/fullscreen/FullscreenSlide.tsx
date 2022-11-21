import { SlideFullscreen } from "./Slides";
import styles from './fullscreen.module.scss';
import buttonStyles from '../../scss/base/forms/button.module.scss';

const FullscreenSlide = ({ img, text, link }: SlideFullscreen) => {
	return (
		<>
			<div className={`ibg ${styles.background}`}>
				<img className="swiper-lazy" data-src={img} alt="" />
			</div>
			<div className={styles.container}>
				<div className={styles.body}>
					<p dangerouslySetInnerHTML={{ __html: text }}></p>
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className={`${buttonStyles.button} ${styles.button}`}
					>
						Получить расчет
					</a>
				</div>
			</div>
		</>
	);
};

export default FullscreenSlide;
