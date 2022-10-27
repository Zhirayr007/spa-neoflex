import React, { useEffect, useState } from 'react';
import Footer from "./component/Footer";
import Shoppcard from "./component/Shoppcard";
import "./style/shoppingcard.css";

export default function Shopping_cart(props) {
	//массив выбранных продуктов
	const [products, setProduct] = useState(props.addproduct);
	//общая сумма платежа
	let [totalPay, setTotalPay] = useState(0);
	let a = [];
	useEffect(() => {
		сhangePay(0);
	})
	//функция подсчета общего платежа
	function сhangePay(pay) {
		a.push(pay);
		let summa = 0;
		if (a.length > 0) {
			for (let i = 0; i < a.length; i++) {
				summa = summa + a[i];
			}
		} else summa = 0;
		setTotalPay(summa);
	}
	//Удаляет продукт
	const removeCard = (id) => {
		props.onClick(id);
		setProduct([...products.filter((product) => product.id !== id)]);
	}
	return (
		<div className="wrapper-shop">
			<div className="container">
				<div className="wrapper-shop__basket">
					<h2>Корзина</h2>
					<div className="shop">
						<div className="shop__product">
							{products.map((product) => {
								return (
									<Shoppcard key={product.id}
										card={product}
										// onClick={() => { props.onClick(product.id) }}
										onClick={() => { removeCard(product.id) }}
										onChange={сhangePay}
									/>
								)
							})}
						</div>
						<div className="shop__pay">
							<div className="result">
								<div className="result__text">ИТОГО</div>
								<div className="result__text" >₽ {totalPay}</div>
							</div>
							<button>Перейти к оформлению</button>
						</div>
					</div>
				</div>
				<div className="wrapper-shop__footer">
					<Footer />
				</div>
			</div>
		</div>
	)
}
