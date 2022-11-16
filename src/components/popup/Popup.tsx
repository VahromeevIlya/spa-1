import clsx from "clsx";
import React from "react";

type Props = {
	active: boolean;
	setActive: (bool: boolean) => void;
	children?: React.ReactNode;
};

const Popup = ({ active, setActive, children }: Props) => {
	return (
		<div aria-hidden="true" className={clsx("popup", active && "popup_show", !active && "popup_hide")}>
			<div className="popup__wrapper">
				<div className="popup__content">
					<button type="button" onClick={() => setActive(false)} className="popup__close"></button>
					<div className="popup__body">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;
