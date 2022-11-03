import React from "react";

type Props = {};

const Keep = (props: Props) => {
	return (
		<section className="keep">
			<div className="keep__container">
				<div className="keep__grid">
					<div className="keep__body">
						<div className="keep__text">
							<p>
								В нашей компании работают более <strong>50</strong>{" "}
								профессионалов. Средний стаж каждого сотрудника более
								<strong>10</strong>
								лет.
							</p>
							<p>
								Мы создали тепло в более чем <strong>100</strong> домах
								от миниатюрных бунгало до гигантских замков. Нам есть
								чем похвастаться.
							</p>
						</div>
						<div className="keep__browsing _icon-mouse">
							ЛИСТАЙТЕ ДАЛЬШЕ
						</div>
					</div>
					<div className="keep__images">
						<div className="keep__image keep__image--large">
							<picture>
								<source
									srcSet="img/keep/keep-1.webp"
									type="image/webp"
								/>
								<img src="img/keep/keep-1.jpg" alt="" />
							</picture>
						</div>
						<div className="keep__image keep__image--small">
							<picture>
								<source
									srcSet="img/keep/keep-2.webp"
									type="image/webp"
								/>
								<img src="img/keep/keep-2.jpg" alt="" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Keep;
