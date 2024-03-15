import React, { useState } from 'react';
import OrderList from './OrderList';
import AddOrderForm from './AddOrderForm';
import EditOrderForm from './EditOrderForm';
import { mockOrders } from './mockOrders';

const Orders = () => {
	const [orders, setOrders] = useState(mockOrders);
	const [editOrderId, setEditOrderId] = useState(null);

	const addOrder = (newOrder) => {
		setOrders([...orders, newOrder]);
	};

	const deleteOrder = (orderId) => {
		setOrders(orders.filter(order => order.id !== orderId));
	};

	const editOrder = (updatedOrder) => {
		setOrders(orders.map(order => (order.id === updatedOrder.id ? updatedOrder : order)));
		setEditOrderId(null);
	};

	const editOrderById = (orderId) => {
		setEditOrderId(orderId);
	};

	return (
		<div>
			<h2>Orders Management</h2>
			<OrderList
				orders={orders}
				onDeleteOrder={deleteOrder}
				onEditOrder={editOrderById}
			/>
			<AddOrderForm onAddOrder={addOrder} />
			{editOrderId && (
				<EditOrderForm
					order={orders.find(order => order.id === editOrderId)}
					onEditOrder={editOrder}
				/>
			)}
		</div>
	);
};

export default Orders;
