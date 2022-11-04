import React from "react";
import { useSwiper } from "swiper/react";
import { Slider } from "../../@types/slider";

type Props = {
	isDesktop: boolean;
	clazzNextButton: string;
	total: number | string;
	current: number | string;
	autoplayStop: (swiper: Slider) => void;
	autoplayStart: (swiper: Slider) => void;
};
const WorkControls = ({
	isDesktop,
	clazzNextButton,
	total,
	current,
	autoplayStop,
	autoplayStart,
}: Props) => {
	const swiper = useSwiper();
	return (
		<div className="controls"
		onMouseEnter={() => isDesktop && autoplayStop(swiper)}
		onMouseLeave={() => isDesktop && autoplayStart(swiper)}
		>
			<div className="controls__shell">
				<div className="controls__grid">
					<div className="swiper-pagination"></div>
					<div className="fraction">
						<span className="fraction__current">{current}</span>/
						<span className="fraction__total">{total}</span>
					</div>
					<div className="arrows">
						<button
							type="button"
							className="arrow arrow--prev _icon-arrow timer"
						>
							<svg>
								<circle
									className="timer__background"
									cx="20"
									cy="20"
									r="19"
								></circle>
								<circle
									className="timer__progress"
									cx="20"
									cy="20"
									r="19"
								></circle>
							</svg>
						</button>
						<button
							type="button"
							className={clazzNextButton}
						>
							<svg>
								<circle
									className="timer__background"
									cx="20"
									cy="20"
									r="19"
								></circle>
								<circle
									className="timer__progress"
									cx="20"
									cy="20"
									r="19"
								></circle>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkControls;
