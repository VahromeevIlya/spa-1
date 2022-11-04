import clsx from "clsx";
import React from "react";

type Props = {
	step: number;
	img: { standard: string; webp: string };
	title: string;
	text: string;
};

const WorkSlide = ({ step, img, title, text }: Props) => {
	return (
		<>
			<div className="work__image-ibg">
				<picture>
					<source
						className="swiper-lazy"
						data-srcset={img.webp}
						type="image/webp"
					/>
					<img className="swiper-lazy" data-src={img.standard} alt="" />
				</picture>
			</div>
			<div className="work__body">
				<h2 className="work__title _title">{title}</h2>
				<div className="work__steps">
					{[...Array(5)].map((_, i) => (
						<div key={i} className={clsx("work__step",step === i && '_active mobile', i < step && '_prev-active')}>
							<p>Шаг {i+1}</p>
						</div>
					))}
				</div>
				<div className="work__text">
					<p dangerouslySetInnerHTML={{ __html: text }}></p>
				</div>
			</div>
		</>
	);
};

export default WorkSlide;
