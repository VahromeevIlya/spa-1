import { useCallback, useRef, useState } from "react";
import { AdaptiveStateType, Media } from "../../redux/adaptive/types";
import Menu from "./Menu";
import ButtonHeader from "./ButtonHeader";
import PopupCallback from "../popup/PopupCallback";
import styles from './header.module.scss';


type HeaderProps = AdaptiveStateType;

const Header = ({ media }: HeaderProps) => {
	const htmlRef = useRef(document.documentElement);
	const toggleBurger = useCallback(() => {
		htmlRef.current.classList.toggle("menu-open");
	}, []);
	const [opened, setOpened] = useState(false);

	return (
		<header className={styles.root} data-scroll="400">
			<div className={styles.wrapper}>
				<div className="container">
					<div className={styles.grid}>
						<button
							onClick={toggleBurger}
							type="button"
							className="icon-menu"
						>
							<span></span>
						</button>
						<a href="" className={styles.logo}>
							<img src="img/logo.svg" alt="Логотип" />
						</a>
						<div className={`${styles.menu} menu`}>
							{media >= Media.DESKTOP && <Menu />}
						</div>
						<div className={styles.actions}>
							<a
								href="tel:8 (4922) 42-12-83"
								className={`${styles.phone} _icon-phone`}
							>
								<span>8 (4922) 42-12-83</span>
							</a>
							{media > Media.MOBILE && <ButtonHeader setOpened={setOpened} />}
							<PopupCallback opened={opened} setOpened={setOpened}/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
