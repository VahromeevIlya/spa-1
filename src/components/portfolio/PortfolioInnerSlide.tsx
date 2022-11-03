import React from "react";

type Props = {
	defaultImage: string;
	webp: string;
};

const PortfolioInnerSlide = ({defaultImage , webp}: Props) => {
	return (
		<>
			<picture>
				<source
					className="swiper-lazy"
					data-srcset={webp}
					type="image/webp"
				/>
				<img
					className="swiper-lazy"
					data-src={defaultImage}
					alt=""
				/>
			</picture>
		</>
	);
};

export default PortfolioInnerSlide;
