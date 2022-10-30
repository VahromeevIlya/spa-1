const Menu = () => {
	return (
		<nav
			className="menu__body"
		>
			<ul className="menu__list">
				<li className="menu-item">
					<a href="#about">Про нас</a>
				</li>
				<li className="menu-item">
					<a href="#order">Заказать котельную</a>
				</li>
				<li className="menu-item">
					<a href="#team">Команда</a>
				</li>
				<li className="menu-item">
					<a href="#portfolio">Портфолио</a>
				</li>
				<li className="menu-item">
					<a href="/">Контакты</a>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
