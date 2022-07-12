import React from 'react';
import ProductInfo from '../componentes/ProductInfo';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;