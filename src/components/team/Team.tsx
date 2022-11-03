import React from "react";
import { useSelector } from "react-redux";
import { Lazy, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { mediaSize } from "../../redux/adaptive/selectors";
import { Media } from "../../redux/adaptive/types";
import TeamCard from "./TeamCard";

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

const Team = (props: Props) => {
	const media = useSelector(mediaSize);
	return (
		<section id="team" className="team">
			<div className="team__container">
				<div className="team__grid">
					<div className="team__top">
						<h2 className="team__title _title">Наша команда</h2>
						{media > Media.MOBILE_SMALL && <div
							className="team__arrows arrows"
						>
							<button
								type="button"
								className="arrow arrow--prev  arrow--team _icon-arrow timer"
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
								className="arrow arrow--next arrow--team _icon-arrow timer"
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
						</div>}
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
						className="team__slider"
					>
						{TeamSlides.map((item, index) => {
							return (
								<SwiperSlide className="team__slide" key={index}>
									<TeamCard {...item} />
								</SwiperSlide>
							);
						})}
						{media <= Media.MOBILE_SMALL && <div
							className="team__arrows arrows"
						>
							<button
								type="button"
								className="arrow arrow--prev  arrow--team _icon-arrow timer"
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
								className="arrow arrow--next arrow--team _icon-arrow timer"
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
						</div>}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Team;
