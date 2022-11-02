import React from "react";

type Props = {};

const About = (props: Props) => {
	return (
		<section id="about" className="about">
			<div className="about__container">
				<div className="about__grid">
					<div className="about__body">
						<div className="about__container">
							<h2 className="about__title _title">Про нас</h2>
							<div className="about__text text">
								<p>
									Наша компания профилируется на промышленных объектах,
									а также делает большое количество проектов для
									частного сектора.
								</p>
								<p>
									Компания «Теза» была основана в 1997 году группой
									энтузиастов увлеченных своим ремеслом и любовью к
									энергоэффективным технологиям.
								</p>
								<p>
									Создателем и идейным вдохновителем является Маров
									Александр Николаевич, инженер - энергетик с богатым
									опытом в проектировании систем отопления,
									газоснабжения и водоснабжения.
								</p>
							</div>
						</div>
					</div>
					<div className="about__achives">
						<div className="about__achive">
							<div className="about__achive-year">1997</div>
							<div className="about__achive-title">
								год основания компании
							</div>
						</div>
						<div className="about__achive">
							<div className="about__achive-year">10+</div>
							<div className="about__achive-title">
								лет стаж каждого сотрудника
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
