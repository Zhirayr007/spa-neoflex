import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style/null.css';
import './App.css';
import Shopping_cart from './Shopping cart';
import Store from './Store';
import like from "./img/icon/like.svg";
import shop_cart from "./img/icon/Shopping cart.svg";

function App() {
	const [products, setProducts] = useState([])

	//Добавляет выбранный продукт из страницы Store в массив 
	const addShoppingCart = (userInput) => {
		if (userInput) {
			const newItem = {
				id: Math.random().toString(36).substr(2, 9),
				product: userInput
			}
			setProducts([...products, newItem]);
		}
	}

	const removeCard = (id) => {
		setProducts([...products.filter((product) => product.id !== id)]);
	}

	return (
		<div className="App">
			<BrowserRouter>
				<header>
					<div className="header-name">
						<Link to="/">QPICK</Link>
					</div>
					<div className="header-icon">
						<Link to="/"><img src={like} alt="" className="header-icon__like" /></Link>
						<Link to="/shopping_cart"><img src={shop_cart} alt="" className="header-icon__shopping-cart" />
							<div className={products.length > 0 ? "number-in-the-basket" : "number-in-the-basket-displayNone"}>{products.length}</div>
						</Link>
					</div>
				</header>
				<Routes  >
					<Route path="/" element={<Store onClick={addShoppingCart} />} />
					<Route path="/shopping_cart" element={<Shopping_cart addproduct={products}
						// onClick={() => { removeCard(product.id) }} 
						onClick={removeCard}
					/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
