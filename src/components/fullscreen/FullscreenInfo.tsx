import styles from './fullscreen.module.scss';

const FullscreenInfo = () => {
	return (
		<div className={styles.info}>
			<div className={styles.container}>
				<div className={styles.info_block}>
					<div className="pulse-box">
						<svg
							className="pulse-svg"
							width="50"
							height="50"
							viewBox="0 0 50 50"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								className="circle first-circle"
								cx="25"
								cy="25"
								r="25"
							></circle>
							<circle
								className="circle second-circle"
								cx="25"
								cy="25"
								r="25"
							></circle>
							<circle
								className="circle third-circle"
								cx="25"
								cy="25"
								r="25"
							></circle>
							<circle
								className="circle"
								fill="white"
								cx="25"
								cy="25"
								r="25"
							></circle>
						</svg>
					</div>
					<p>
						Мы страхуем каждый дом на первый год, вам не придется
						переживать за котельную и свой любимый дом
					</p>
				</div>
			</div>
		</div>
	);
};

export default FullscreenInfo;
