import React from 'react';
import OrderItem from '../componentes/OderItem';
import '../styles/Orders.css';

const Orders = () => {
	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
					<OrderItem />
				</div>
			</div>
		</div>
	);
}

export default Orders;
