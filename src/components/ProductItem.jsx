import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductItem.scss';
import btnAddCart from '@icons/bt_add_to_cart.svg';
const iconBike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext)

	const handleAddCart = (productItem) => {
		addToCart(productItem)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick= {()=> handleAddCart(product)}>
					<img src={btnAddCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;