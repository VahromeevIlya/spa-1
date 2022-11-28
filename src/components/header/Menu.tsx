import { Link } from "react-scroll";
import { ReactScrollLinkProps } from "react-scroll/modules/components/Link";

type Links = {
	name: string;
	to: string;
};

const settings: ReactScrollLinkProps = {
	activeClass: "active",
	spy: true,
	smooth: true,
	offset: -100,
	duration: 500,
	to: "#"
};

const links: Links[] = [
	{ name: "Про нас", to: "about" },
	{ name: "Заказать котельную", to: "order" },
	{ name: "Команда", to: "team" },
	{ name: "Портфолио", to: "portfolio" },
	{ name: "Контакты", to: "#" },
];

type Props = {
	toggleBurger?: () => void;
}

const Menu = () => {
	return (
		<nav className="menu__body">
			<ul className="menu__list">
				{links.map((link) => {
					return (
						<li key={link.name}>
							<Link {...settings} to={link.to}>
								{link.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Menu;
