import React from "react";
import styles from './keep.module.scss';
type Props = {};

const Keep = (props: Props) => {
	return (
		<section className={styles.section}>
			<div className="container">
				<div className={styles.grid}>
					<div className={styles.body}>
						<div className={styles.text}>
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
						<div className={`${styles.browsing} _icon-mouse`}>
							ЛИСТАЙТЕ ДАЛЬШЕ
						</div>
					</div>
					<div className={styles.images}>
						<div className={`${styles.image} ${styles.large}`}>
							<picture>
								<source
									srcSet="img/keep/keep-1.webp"
									type="image/webp"
								/>
								<img src="img/keep/keep-1.jpg" alt="" />
							</picture>
						</div>
						<div className={`${styles.image} ${styles.small}`}>
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
