import React from "react";
import CostItem from "./CostItem";
import styles from './cost.module.scss';
type Props = {};


const CostItems = [
	{
		img: ['img/cost/cost-1.jpg','img/cost/cost-1.webp'],
		title: "Дом до 200 км.м <span>(S)</span>",
		subtitle: "Возводим за 1 месяц",
		time: "7 дней",
		equipment: "Котел 3МВт",
		description: `Предназначен для небольших домов площадью до
		<strong>100 квм.</strong> Высота потолков до 3
		метров,
		<strong>жилая площадь около 60 квм.</strong> В
		зимний период возможно минимальное отопление
		при отсутствии жильцов. Регулирование
		производится в ручном режиме.`,
		price: "400 000 Рублей",
	},
	{
		img: ['img/cost/cost-2.jpg','img/cost/cost-2.webp'],
		title: "Дом до 300 км.м <span>(М)</span>",
		subtitle: "Возводится за 2 месяца",
		time: "14 дней",
		equipment: "Котел 7МВт",
		description: `Предназначен для домов площадью до
		<strong>200 квм.</strong> Высота потолков до 3
		метров,
		<strong>жилая площадь около 120 квм.</strong> В
		зимний период возможно минимальное отопление
		при отсутствии жильцов. Регулирование
		производится в ручном и удаленном режиме через
		приложение на телефоне.`,
		price: "900 000 Рублей",
	},
	{
		img: ['img/cost/cost-3.jpg','img/cost/cost-3.webp'],
		title: "Дом до 300 км.м <span>(L)</span>",
		subtitle: "Возводится за 3 месяца",
		time: "14 дней",
		equipment: "Котел 10МВт",
		description: `Предназначен для больших домов площадью до
		<strong>300 квм.</strong> Высота потолков до 3 метров,
		<strong>жилая площадь около 220 квм.</strong> В зимний
		период возможно минимальное отопление при отсутствии
		жильцов. Регулирование производится в ручном и удаленном
		режиме через приложение на телефоне.`,
		price: "1 500 000 Рублей",
	},
];


const Cost = (props: Props) => {
	return (
		<section className={styles.section}>
			<div className="container">
				<h2 className={`${styles.title} _title`}>Сколько стоит?</h2>
				<div className={`${styles.text} text`}>
					<p>
						<span>Важно!</span>
					</p>
					<p>
						В пуле наших компетенций проектирование и создание котельных в
						комплексе с обеспечением водоснабжения, газификации и
						разработки канализационных каналов.
					</p>
					<p>
						Каждый проект индивидуален, в каждом есть свои нюансы, и
						многое зависит от требования заказчика, поэтому говорить о
						каких либо общих стандартах не приходится. Для вашего удобства
						мы создали некоторые ориентиры по ценам. Но перед тем как
						заказывать котельную нужно определиться, вам нужна только
						создание котельной или комплекс работ по разводке труб и
						установке батарей в помещениях
					</p>
				</div>
			</div>
			<div className="container">
				<div className={styles.cards}>
					<div className={styles.grid}>
						{CostItems.map((item,index) => {
							return <CostItem key={index} {...item}/>
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cost;
