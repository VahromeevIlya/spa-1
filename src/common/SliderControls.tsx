import { useSwiper } from "swiper/react";
import { Slider } from "../@types/slider";
import ButtonCircle from "./ButtonCircle";

type Props = {
	isDesktop: boolean;
	clazzNextButton: string;
	total: number | string;
	current: number | string;
	controlsContainerClass: string;
	autoplayStop: (swiper: Slider) => void;
	autoplayStart: (swiper: Slider) => void;
};

const SliderControls = ({
	isDesktop,
	clazzNextButton,
	total,
	current,
	autoplayStop,
	autoplayStart,
	controlsContainerClass
}: Props) => {
	const swiper = useSwiper();
	return (
		<div
			className="controls"
			onMouseEnter={() => isDesktop && autoplayStop(swiper)}
			onMouseLeave={() => isDesktop && autoplayStart(swiper)}
		>
			<div className={controlsContainerClass}>
				<div className="controls__grid">
					<div className="swiper-pagination"></div>
					<div className="fraction">
						<span className="fraction__current">{current}</span>/
						<span className="fraction__total">{total}</span>
					</div>
					<div className="arrows">
						<ButtonCircle className="arrow arrow--prev _icon-arrow timer" />
						<ButtonCircle className={clazzNextButton} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SliderControls;
