import React from "react";
import styles from './team.module.scss';

type Props = {
	img: string[];
	name: string;
	post: string;
};

const TeamCard = ({ img, name, post }: Props) => {
	return (
		<div className={styles.card}>
			<div className={`ibg ${styles.card_image}`}>
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
			<div className={styles.card_body}>
				<div className={styles.card_name}>{name}</div>
				<div className={styles.card_post}>{post}</div>
			</div>
		</div>
	);
};

export default TeamCard;
