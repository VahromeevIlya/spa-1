import { AdaptiveStateType, Media } from "../redux/adaptive/types";
import Menu from "./header/Menu";

type MenuMobileUpProps = AdaptiveStateType;

const MenuMobileUp = ({ media }: MenuMobileUpProps) => {
	return (
		<div className="menu-mobile-up">
			<div className="menu-mobile-up__container">
				{media <= Media.TABLET && <Menu />}
			</div>
		</div>
	);
};

export default MenuMobileUp;
