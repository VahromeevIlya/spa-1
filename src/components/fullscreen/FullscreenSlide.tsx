import { SlideFullscreen } from "./Slides";
import styles from './fullscreen.module.scss';

const FullscreenSlide = ({ img, text, link }: SlideFullscreen) => {
	return (
		<>
			<div className={`img-ibg ${styles.background}`}>
				<img className="swiper-lazy" data-src={img} alt="" />
			</div>
			<div className={styles.container}>
				<div className={styles.body}>
					<p dangerouslySetInnerHTML={{ __html: text }}></p>
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className={`button ${styles.button}`}
					>
						Получить расчет
					</a>
				</div>
			</div>
		</>
	);
};

export default FullscreenSlide;
