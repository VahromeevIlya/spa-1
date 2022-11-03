import React from "react";

type Props = {
	img: string[];
	title: string;
	subtitle: string;
	time: string;
	equipment: string;
	description: string;
	price: string;
};

const CostItem = ({
	img,
	title,
	subtitle,
	time,
	equipment,
	description,
	price,
}: Props) => {
	return (
		<div className="cost-cards__card">
			<div className="cost-cards__image-ibg">
				<picture>
					<source srcSet={img[1]} type="image/webp" />
					<img src={img[0]} alt="" />
				</picture>
			</div>
			<div className="cost-cards__shell">
				<div className="cost-cards__body">
					<div className="cost-cards__headline">
						<div className="cost-cards__title" dangerouslySetInnerHTML={{ __html: title }}>
						</div>
						<div className="cost-cards__subtitle">
							{subtitle}
						</div>
					</div>
					<div className="cost-cards__text text">
						<hr />
						<ul>
							<li>
								Длительность создание проекта: <br />
								<strong>{time}</strong>
							</li>
							<li>
								Оборудование: <br />
								<strong>{equipment}</strong>
							</li>
						</ul>
						<hr />
						<h4>Описание:</h4>
						<p  dangerouslySetInnerHTML={{ __html: description }}>
						</p>
					</div>
				</div>
				<div className="cost-cards__order">
					<div className="cost-cards__price">{price}</div>
					<div className="cost-cards__button">
						<button
							type="button"
							data-popup="#callback"
							className="button"
						>
							Заказать котельную
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CostItem;
