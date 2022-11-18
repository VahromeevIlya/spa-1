import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ANIMATION_TIME } from "./const";
import styles from "./styles.module.css";
import animationStyles from "./animation.module.css";
import { SimpleAnimatedModalLayout } from "./types";
import { setPopupState } from "../../../redux/popups/slice";
import { useDispatch } from "react-redux";

const overlayAnimation = {
	enter: animationStyles.overlayEnter,
	enterActive: animationStyles.overlayEnterActive,
	exit: animationStyles.overlayExit,
	exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
	enter: animationStyles.contentEnter,
	enterActive: animationStyles.contentEnterActive,
	exit: animationStyles.contentExit,
	exitActive: animationStyles.contentExitActive,
};

export const Layout = ({
	onClose,
	children,
	opened,
}: SimpleAnimatedModalLayout) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const [animationIn, setAnimationIn] = useState(false);

	useEffect(() => {
		dispatch(setPopupState(opened));
		setAnimationIn(opened);
	}, [opened]);

	return (
		<div className={styles.container}>
			<CSSTransition
				in={animationIn}
				nodeRef={overlayRef}
				timeout={ANIMATION_TIME}
				mountOnEnter
				unmountOnExit
				classNames={overlayAnimation}
			>
				<div
					ref={overlayRef}
					className={styles.overlay}
					onClick={onClose}
				/>
			</CSSTransition>

			<CSSTransition
				in={animationIn}
				nodeRef={contentRef}
				timeout={ANIMATION_TIME}
				mountOnEnter
				unmountOnExit
				classNames={contentAnimation}
			>
				<div className={styles.wrapper}>
					<div ref={contentRef} className={styles.content}>
						<button
							type="button"
							onClick={onClose}
							className="popup__close"
						></button>
						{children}
					</div>
				</div>
			</CSSTransition>
		</div>
	);
};
