import React from "react";
import { useSelector } from "react-redux";
import { Lazy, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonCircle from "../../common/ButtonCircle";
import { mediaSize } from "../../redux/adaptive/selectors";
import { Media } from "../../redux/adaptive/types";
import TeamCard from "./TeamCard";
import styles from "./team.module.scss";

type Props = {};

const TeamSlides = [
	{
		img: ["img/team/team-1.png", "img/team/team-1.webp"],
		name: "Назарова Светлана",
		post: "главный бухгалтер",
	},
	{
		img: ["img/team/team-2.png", "img/team/team-2.webp"],
		name: "Морозов Алексей",
		post: "директор филиала",
	},
	{
		img: ["img/team/team-3.png", "img/team/team-3.webp"],
		name: "Будилина Ольга",
		post: "директор по маркетингу",
	},
	{
		img: ["img/team/team-4.png", "img/team/team-4.webp"],
		name: "Рахманов Замик",
		post: "директор филиала",
	},
	{
		img: ["img/team/team-5.png", "img/team/team-5.webp"],
		name: "Кукурина Светлана",
		post: "директор филиала",
	},
	{
		img: ["img/team/team-6.png", "img/team/team-6.webp"],
		name: "Большаков Илья",
		post: "директор по маркетингу",
	},
	{
		img: ["img/team/team-6.png", "img/team/team-6.webp"],
		name: "Большаков Илья",
		post: "директор по маркетингу",
	},
];

const TeamArrows = () => {
	return (
		<div className={`${styles.arrows} arrows`}>
			<ButtonCircle className="arrow arrow--prev  arrow--team _icon-arrow timer" />
			<ButtonCircle className="arrow arrow--next arrow--team _icon-arrow timer" />
		</div>
	);
};

const Team = (props: Props) => {
	const media = useSelector(mediaSize);
	return (
		<section id="team" className={styles.section}>
			<div className="container">
				<div className={styles.grid}>
					<div className={styles.top}>
						<h2 className={`${styles.title} _title`}>Наша команда</h2>
						{media > Media.MOBILE_SMALL && <TeamArrows />}
					</div>
					<Swiper
						modules={[Navigation, Pagination, Lazy]}
						slidesPerView="auto"
						spaceBetween={30}
						speed={800}
						preloadImages={false}
						watchSlidesProgress={true}
						lazy={{
							checkInView: true,
							loadOnTransitionStart: true,
						}}
						navigation={{
							nextEl: ".arrow--team.arrow--next",
							prevEl: ".arrow--team.arrow--prev",
						}}
						className={styles.slider}
					>
						{TeamSlides.map((item, index) => {
							return (
								<SwiperSlide className={styles.slide} key={index}>
									<TeamCard {...item} />
								</SwiperSlide>
							);
						})}
						{media <= Media.MOBILE_SMALL && <TeamArrows />}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Team;
