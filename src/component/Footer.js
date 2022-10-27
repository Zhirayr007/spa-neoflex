import React, { useState } from 'react'
import VK from "../img/icon/VK.svg";
import Tl from "../img/icon/Telegram.svg";
import WU from "../img/icon/Whatsapp.svg";
import leng from "../img/icon/Group.svg";
export default function Footer() {

	let [activLeng, setActivLeng] = useState(true);

	const activLengStyle = { color: "#FFA542" }
	const posivLengStyle = { color: "#101010" }

	return (
		<footer className="footer">
			<div className="footer__brend">QPICK</div>
			<div className="footer__menu">
				<ul className="list">
					<li className="element like"> Избранное</li>
					<li className="element shopcart">Корзина</li>
					<li className="element contacts">Контакты</li>
				</ul>
			</div>
			<div className="footer__section">
				<div className="conditions">Условия сервиса</div>
				<div className="languages">
					<img className="languages__icon" src={leng} alt="" />
					<span className="languages__text" style={activLeng ? activLengStyle : posivLengStyle} onClick={() => { setActivLeng(true) }}>Рус</span>
					<span className="languages__text" style={activLeng ? posivLengStyle : activLengStyle} onClick={() => { setActivLeng(false) }}>Eng</span>
				</div>
			</div>
			<div className="footer__icon">
				<img className="VK" src={VK} alt="" />
				<img className="Telegram" src={Tl} alt="" />
				<img className="whatsup" src={WU} alt="" />
			</div>
		</footer>
	)
}
