import styles from './About.module.scss';

const About = () => {
	return (
		<section id="about" className={styles.section}>
			<div className={styles.container}>
				<div className={styles.grid}>
					<div className={styles.body}>
						<div className={styles.container}>
							<h2 className={`${styles.title} _title`}>Про нас</h2>
							<div className={`${styles.text} text`}>
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
					<div className={styles.achives}>
						<div className={styles.achive}>
							<div className={styles.achiveYear}>1997</div>
							<div className={styles.achiveTitle}>
								год основания компании
							</div>
						</div>
						<div className={styles.achive}>
							<div className={styles.achiveYear}>10+</div>
							<div className={styles.achiveTitle}>
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
