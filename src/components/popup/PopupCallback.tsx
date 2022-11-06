import React from "react";
import Popup from "./Popup";

type Props = {
	active: boolean;
	setActive: (bool: boolean) => void;
};

const PopupCallback = ({active,setActive}: Props) => {
	return (
		<Popup active={active} setActive={setActive}>
			<form
				action="#"
				className="form form--dark"
			>
				<div className="form__headline headline">
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
								value=""
								className="input-words wpcf7-form-control wpcf7-text wpcf7-validates-as-required form__input input wpcf7-not-valid"
								placeholder="Ваше имя*"
							/>
							<span className="wpcf7-not-valid-tip" aria-hidden="true">
								Поле обязательно для заполнения.
							</span>
						</span>
					</div>
					<div className="form__line">
						<span className="wpcf7-form-control-wrap your-name">
							<input
								type="text"
								name="phone"
								value=""
								className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form__input input wpcf7-not-valid _phone"
								placeholder="Номер телефона*"
							/>
							<span className="wpcf7-not-valid-tip" aria-hidden="true">
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
					<a href="" target="_blank">
						условия пользовательского соглашения
					</a>
					и согласны с
					<a href="" target="_blank">
						политикой конфиденциальности
					</a>
					сайта
				</div>

				<span className="wpcf7-form-control-wrap" data-name="service-text">
					<textarea
						name="service-text"
						className="wpcf7-form-control wpcf7-textarea visually-hidden"
						aria-invalid="false"
					></textarea>
				</span>
				<button data-popup="#success" type="button" className="">
					Успех
				</button>

				<div className="wpcf7-response-output" aria-hidden="true">
					Одно или несколько полей содержат ошибочные данные. Пожалуйста,
					проверьте их и попробуйте ещё раз.
				</div>
			</form>
		</Popup>
	);
};

export default PopupCallback;
