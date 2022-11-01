import { SlideFullscreen } from "./Slides";

const FullscreenSlide = ({ img, text, link }: SlideFullscreen) => {
	return (
		<>
			<div className="fullscreen__background-ibg">
				<img className="swiper-lazy" data-src={img} alt="" />
			</div>
			<div className="fullscreen__container">
				<div className="fullscreen__body">
					<p dangerouslySetInnerHTML={{ __html: text }}></p>
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="button fullscreen__button"
					>
						Получить расчет
					</a>
				</div>
			</div>
		</>
	);
};

export default FullscreenSlide;
