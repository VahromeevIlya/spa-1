import { AdaptiveStateType, Media } from "../redux/adaptive/types";
import ButtonHeader from "./header/ButtonHeader";

type MenuMobileDownProps = AdaptiveStateType;

const MenuMobileDown = ({ media }: MenuMobileDownProps) => {
	return (
		<div className="menu-mobile-down">
			<div className="menu-mobile-down__container">
				<div className="menu-mobile-down__grid">
					<a
						href="tel:8 (4922) 42-12-83"
						className="menu-mobile-down__phone"
					>
						8 (4922) 42-12-83
					</a>
					{media <= Media.MOBILE && <ButtonHeader />}
				</div>
			</div>
		</div>
	);
};

export default MenuMobileDown;
