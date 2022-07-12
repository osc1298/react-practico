
import React, {useState, useEffect} from 'react';
import ProductItem from '../componentes/ProductItem';
import '../styles/ProductList.css';
import useGetProducts from '../hooks/useGetProducts';


const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	
		 const products = useGetProducts(API)

	return (
		<section className="main-container">
			<div className="ProductList">
				{
					products.map( (product) => (
						<ProductItem product = {product} key= {product.id}/>
					))
				}
				<ProductItem />
			</div>
		</section>
	);
}

export default ProductList;
