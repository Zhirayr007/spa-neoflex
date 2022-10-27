import React, { useEffect, useState } from 'react';
import plus from "../img/picture/button2.png";
import minus from "../img/picture/button1.png";
import "../style/shoppcard.css";
import pict from "../img/picture/Image.png";
import delet from "../img/icon/Delete.svg";


export default function Shoppcard(props) {
	const [count, setCount] = useState(1);

	useEffect(() => {
		props.onChange(count * props.card.product.price.new);
	})
	function increment() {
		setCount(count + 1);
	}
	function decrement() {
		if (count > 1) setCount(count - 1);
	}
	const removeProduct = () => {
		props.onClick();
	}
	return (
		<div className="shoppcard">
			<div className="first-layer">
				<div className="first-layer__img">
					<img src={props.card.product.img} alt="" />
				</div>
				<div className="first-layer__name-price">
					<div className="product-name">{props.card.product.name}</div>
					<div className="product-price">{props.card.product.price.new}</div>
				</div>
				<div className="first-layer__icon">
					<img src={delet} alt="" onClick={removeProduct} />
				</div>
			</div>
			<div className="second-layer">
				<div class="second-layer__count">
					<button class="plus" onClick={increment}>
						<img src={plus} alt="" />
					</button>
					<div class="number">{count}</div>
					<button class="minus" onClick={decrement}>
						<img src={minus} alt="" />
					</button>
				</div>
				<div className="second-layer__price" > {count * props.card.product.price.new} ₽</div>
			</div>
		</div>
	)
}
