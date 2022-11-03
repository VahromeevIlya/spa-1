import React from "react";

type Props = {};

const Order = (props: Props) => {
	return (
		<section id="order" className="order">
			<div className="order__image-ibg">
				<picture>
					<source srcSet="img/order/order.webp" type="image/webp" />
					<img src="img/order/order.jpg" alt="" />
				</picture>
			</div>
			<div className="order__container">
				<div className="order__grid">
					<form action="#" className="order__form form wpcf7-form invalid">
						<div className="form__headline headline headline--light">
							<h2 className="headline__title">Заказать котельную</h2>
							<p className="headline__subtitle">
								Оставьте свои контакты и наш менеджер свяжется с Вами в
								ближайшее время
							</p>
						</div>
						<div className="form__row">
							<div className="form__line">
								<span className="wpcf7-form-control-wrap your-name">
									<input
										type="text"
										name="your-name"
										size={40}
										className="input-words wpcf7-form-control wpcf7-text wpcf7-validates-as-required form__input input wpcf7-not-valid"
										placeholder="Ваше имя*"
									/>
									<span
										className="wpcf7-not-valid-tip"
										aria-hidden="true"
									>
										Поле обязательно для заполнения.
									</span>
								</span>
							</div>
							<div className="form__line">
								<span className="wpcf7-form-control-wrap your-name">
									<input
										type="text"
										name="phone"
										size={40}
										className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form__input input wpcf7-not-valid _phone"
										placeholder="Номер телефона*"
									/>
									<span
										className="wpcf7-not-valid-tip"
										aria-hidden="true"
									>
										Поле обязательно для заполнения.
									</span>
								</span>
							</div>
						</div>
						<div className="form__button">
							<button type="submit" className="button button--large">
								Отправить
							</button>
						</div>
						<div className="form__agreement">
							Отправляя форму, Вы принимаете
							<a href="/" target="_blank">
								условия пользовательского соглашения
							</a>
							и согласны с
							<a href="/" target="_blank">
								политикой конфиденциальности
							</a>
							сайта
						</div>
						<button data-popup="#success" type="button">
							Успех
						</button>
						<div className="wpcf7-response-output" aria-hidden="true">
							Одно или несколько полей содержат ошибочные данные.
							Пожалуйста, проверьте их и попробуйте ещё раз.
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Order;
