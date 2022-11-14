import React from "react";
import Menu from "../header/Menu";
import styles from './footer.module.scss';

type FooterProps = {};

const Footer = (props: FooterProps) => {
	return (
		<footer className={styles.root}>
			<div className={`${styles.background} ibg`}>
				<picture>
					<img src="img/footer/footer-bg.jpg" alt="" />
				</picture>
			</div>
			<div className="container">
				<div className={styles.grid}>
					<div className={styles.top}>
						<a href="/" className={styles.logo}>
							<img src="img/logo.svg" alt="Логотип" />
						</a>
						<div className={`${styles.menu} menu`}>
							<Menu/>
						</div>
						<div className={styles.actions}>
							<a href="tel:8 (4922) 42-12-83" className={styles.phone}>
								<span>8 (4922) 42-12-83</span>
							</a>
							<button
								type="button"
								data-popup="#callback"
								className={`${styles.callback} _icon-phone-outline`}
							>
								<span>ПЕРЕЗВОНИТЕ МНЕ</span>
							</button>
						</div>
					</div>
					<div className={styles.bottom}>
						<div className={styles.copy}>
							© 2005-2022. Компния “Теза”. 600000, Россия, г. Владимир,
							ул 2-я Никольская д. 2/9.
						</div>
						<div className={styles.agreements}>
							<a href="/" target="_blank" className={styles.agreement}>
								Политика конфиденциальности
							</a>
							<a href="/" target="_blank" className={styles.agreement}>
								Пользовательское соглашение
							</a>
						</div>
						<div className={styles.widestudio}>
							<div className={styles.widestudio_logo}>
								<img src="img/footer/widestudio.svg" alt="" />
							</div>
							<div className={styles.widestudio_body}>
								<p>Разработка сайта:</p>
								<a
									href="https://widestudio.ru/"
									target="_blank"
									rel="noreferrer"
								>
									WideStudio
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
