import React from "react";

type Props = {
	img: string[];
	name: string;
	post: string;
};

const TeamCard = ({ img, name, post }: Props) => {
	return (
		<div className="team-card">
			<div className="team-card__image-ibg">
				<picture>
					<source
						className="swiper-lazy"
						data-srcset={img[1]}
						type="image/webp"
					/>
					<img
						className="swiper-lazy"
						data-src={img[0]}
						alt=""
					/>
				</picture>
			</div>
			<div className="team-card__body">
				<div className="team-card__name">{name}</div>
				<div className="team-card__post">{post}</div>
			</div>
		</div>
	);
};

export default TeamCard;
