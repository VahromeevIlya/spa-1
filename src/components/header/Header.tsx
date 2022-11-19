import { useCallback, useEffect, useRef, useState } from "react";
import { AdaptiveStateType, Media } from "../../redux/adaptive/types";
import Menu from "./Menu";
import ButtonHeader from "./ButtonHeader";
import PopupCallback from "../popup/PopupCallback";
import styles from "./header.module.scss";

type HeaderProps = AdaptiveStateType;

const Header = ({ media }: HeaderProps) => {
	const htmlRef = useRef(document.documentElement);
	const scrollBurgerMenuRef = useRef(0);
	
	const [opened, setOpened] = useState(false);
	const [scroll, setScroll] = useState(false);
	const headerRef = useRef<HTMLElement>(null);
	const headerAnimate = useRef(800);
	const startRef = useRef(400);
	const scrollDirectionRef = useRef(0);

	const toggleBurger = useCallback(() => {
		if(htmlRef.current.classList.contains('menu-open')) {
			
			headerRef.current?.classList.add("_no-transform");
			htmlRef.current.classList.remove("menu-open");
			setTimeout(() => {
				window.scrollTo(0, scrollBurgerMenuRef.current);
			},50)
			setTimeout(function () {
				headerRef.current?.classList.remove("_no-transform");
			}, 2000);
		
		} else {
			scrollBurgerMenuRef.current = document.documentElement.scrollTop;
			
			htmlRef.current.classList.add("menu-open");
			window.scrollTo(0, 0);
		}
		
	}, []);
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
		<header ref={headerRef} className={styles.root} data-scroll="400">
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
