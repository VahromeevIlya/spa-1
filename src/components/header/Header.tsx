import { useCallback, useEffect, useRef, useState } from "react";
import { AdaptiveStateType, Media } from "../../redux/adaptive/types";
import Menu from "./Menu";
import ButtonHeader from "./ButtonHeader";
import PopupCallback from "../popup/PopupCallback";
import styles from "./header.module.scss";
import { useSelector } from "react-redux";
import { headerTheme } from "../../redux/adaptive/selectors";
import clsx from "clsx";
import { toggleBurger } from "../../utils/toggleBurger";

type HeaderProps = AdaptiveStateType;

const Header = ({ media }: HeaderProps) => {
	const theme = useSelector(headerTheme);
	const [opened, setOpened] = useState(false);
	const [scroll, setScroll] = useState(false);
	const headerRef = useRef<HTMLElement>(null);
	const headerAnimate = useRef(800);
	const startRef = useRef(400);
	const scrollDirectionRef = useRef(0);

	
	useEffect(() => {
		function windowScrollHeader() {
			const scrollTop = window.scrollY;
			if (scrollTop >= startRef.current) {
				setScroll(true);
				!headerRef.current?.classList.contains("_header-scroll") &&
					headerRef.current?.classList.add("_header-scroll");

				if (
					!headerRef.current?.classList.contains("_header-animate") &&
					!headerRef.current?.classList.contains("_header-animated")
				) {
					headerRef.current?.classList.add("_header-animate");
					setTimeout(function () {
						headerRef.current?.classList.remove("_header-animate");
						headerRef.current?.classList.add("_header-animated");
					}, headerAnimate.current);
				}
			} else {
				setScroll(false);
				headerRef.current?.classList.contains("_header-scroll") &&
					headerRef.current?.classList.remove("_header-scroll");

				if (headerRef.current?.classList.contains("_header-animated")) {
					headerRef.current?.classList.remove("_header-animated");
				}
			}
			scrollDirectionRef.current = scrollTop <= 0 ? 0 : scrollTop;
		}

		window.addEventListener("scroll", windowScrollHeader);

		return () => {
			window.removeEventListener("scroll", windowScrollHeader);
		};
	}, []);

	return (
		<header ref={headerRef} className={clsx(styles.root,theme === 'dark' && styles.dark)}>
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
							{media >= Media.TABLET && <Menu />}
						</div>
						<div className={styles.actions}>
							<a
								href="tel:8 (4922) 42-12-83"
								className={`${styles.phone} _icon-phone`}
							>
								<span>8 (4922) 42-12-83</span>
							</a>
							{media > Media.MOBILE && (
								<ButtonHeader setOpened={setOpened} />
							)}
							<PopupCallback opened={opened} setOpened={setOpened} />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
