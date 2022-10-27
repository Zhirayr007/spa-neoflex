import React, { useState } from 'react';
import "../src/style/store.css";
import Card from "./component/Card"
import Footer from "./component/Footer"


export default function Store(props) {
	//массив с объектами карточек моих проектов
	let [cardsObject, setCardsObject] = useState([
		{
			name: "Apple BYZ S852I",
			discount: true,
			price: { new: "2927", old: "3527 ₽" },
			starNumber: "4.7",
			img: require('./img/picture/Image.png')
		},
		{
			name: "Apple EarPods",
			discount: false,
			price: { new: "2327", old: " " },
			starNumber: "4.5",
			img: require('./img/picture/Image-1.png')
		},
		{
			name: "Apple EarPods",
			discount: false,
			price: { new: "2327", old: " " },
			starNumber: "4.5",
			img: require('./img/picture/Image-2.png')
		},
		{
			name: "Apple BYZ S852I",
			discount: false,
			price: { new: "2927", old: " " },
			starNumber: "4.7",
			img: require('./img/picture/Image.png')
		},
		{
			name: "Apple EarPods",
			discount: false,
			price: { new: "2327", old: " " },
			starNumber: "4.5",
			img: require('./img/picture/Image-1.png')
		},
		{
			name: "Apple EarPods",
			discount: false,
			price: { new: "2327", old: " " },
			starNumber: "4.5",
			img: require('./img/picture/Image-2.png')
		},
		{
			name: "Apple AirPods",
			discount: false,
			price: { new: "9527", old: " " },
			starNumber: "4.7",
			img: require('./img/picture/Image-3.png')
		},
		{
			name: "GERLAX GH-04",
			discount: false,
			price: { new: "6527", old: " " },
			starNumber: "4.7",
			img: require('./img/picture/Image-4.png')
		},
		{
			name: "BOROFONE BO4",
			discount: false,
			price: { new: "7527", old: " " },
			starNumber: "4.7",
			img: require('./img/picture/Image-5.png')
		}
	]);
	const handleClick = (card) => {
		props.onClick(card);
	}
	return (
		<div className="wrapper-store">
			<div className="container">
				<div className="wrapper-store__headset">
					<h2>Наушники</h2>
					<div class="block">
						<Card name={cardsObject[0].name}
							price={cardsObject[0].price}
							starNumber={cardsObject[0].starNumber}
							img={cardsObject[0].img}
							onClick={() => { handleClick(cardsObject[0]) }} />
						<Card name={cardsObject[1].name} price={cardsObject[1].price} starNumber={cardsObject[1].starNumber} img={cardsObject[1].img} onClick={() => { handleClick(cardsObject[1]) }} />
						<Card name={cardsObject[2].name} price={cardsObject[2].price} starNumber={cardsObject[2].starNumber} img={cardsObject[2].img} onClick={() => { handleClick(cardsObject[2]) }} />
						<Card name={cardsObject[3].name} price={cardsObject[3].price} starNumber={cardsObject[3].starNumber} img={cardsObject[3].img} onClick={() => { handleClick(cardsObject[3]) }} />
						<Card name={cardsObject[4].name} price={cardsObject[4].price} starNumber={cardsObject[4].starNumber} img={cardsObject[4].img} onClick={() => { handleClick(cardsObject[4]) }} />
						<Card name={cardsObject[5].name} price={cardsObject[5].price} starNumber={cardsObject[5].starNumber} img={cardsObject[5].img} onClick={() => { handleClick(cardsObject[5]) }} />
					</div>
					<h2>Беспроводные наушники</h2>
					<div class="block">
						<Card name={cardsObject[6].name} price={cardsObject[6].price} starNumber={cardsObject[6].starNumber} img={cardsObject[6].img} onClick={() => { handleClick(cardsObject[6]) }} />
						<Card name={cardsObject[7].name} price={cardsObject[7].price} starNumber={cardsObject[7].starNumber} img={cardsObject[7].img} onClick={() => { handleClick(cardsObject[7]) }} />
						<Card name={cardsObject[8].name} price={cardsObject[8].price} starNumber={cardsObject[8].starNumber} img={cardsObject[8].img} onClick={() => { handleClick(cardsObject[8]) }} />
					</div>
				</div>
				<div className="wrapper-store__footer">
					<Footer />
				</div>
			</div>
		</div>
	)
}
