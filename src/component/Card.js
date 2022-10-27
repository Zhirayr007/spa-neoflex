import React from 'react'
import "../style/card.css"
import star from "../img/icon/star.svg"

export default function Card(props) {

	const addCard = () => {
		props.onClick();
	}

	return (
		<div className="card">
			<div className="card__imeg">
				<img src={props.img} alt="" />
			</div>
			<div className="card__name-price">
				<div className="product-name">
					{props.name}
				</div>
				<div className="product-price">
					<div className="product-price__new">{props.price.new} ₽</div>
					<div className="product-price__old">{props.price.old}</div>
				</div>
			</div>
			<div className="card__douw">
				<div className="product-star">
					<img src={star} alt="" />
					<span>{props.starNumber}</span>
				</div>
				<button className="buy" onClick={addCard}>Купить</button>
			</div>
		</div>
	)
}
