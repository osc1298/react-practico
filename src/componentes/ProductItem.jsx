import React from 'react';
import { useContext } from 'react';
import '../styles/ProductItem.css';
import AppContext from '../context/AppContext'


const ProductItem = ({product}) => {

	const { addToCart} = useContext(AppContext);



const handClick = (item) => {
	addToCart(item)
}

	return (
		<div className="ProductItem">
			<img src={ProductItem.images[0]} alt= {product.title}/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=>handClick(product)}>
					<img src="./icons/bt_add_to_cart.svg" alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
