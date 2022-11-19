import ButtonCircle from '../../common/ButtonCircle';
import styles from './portfolio.module.scss';
type Props = {};

const PortfolioTop = (props: Props) => {
	return (
		<div className="container">
			<div className={styles.top}>
				<h2 className={`${styles.title} _title`}>Портфолио</h2>
				<div className="portfolio__arrows arrows">
					<ButtonCircle className="arrow arrow--prev arrow--portfolio _icon-arrow timer" />
					<ButtonCircle className="arrow arrow--next arrow--portfolio _icon-arrow timer" />
				</div>
			</div>
		</div>
	);
};

export default PortfolioTop;
