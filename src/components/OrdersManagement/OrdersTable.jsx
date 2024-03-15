import React, { useState } from 'react';
import './OrderTables.scss';



const OrdersTable = () => {
	const [orders, setOrders] = useState([
		{ id: 1, customerId: 101, customerName: 'John Doe', date: '2024-03-15', status: 'pending' },
		{ id: 2, customerId: 102, customerName: 'Jane Smith', date: '2024-03-16', status: 'delivered' },
		{ id: 3, customerId: 103, customerName: 'Alice Johnson', date: '2024-03-17', status: 'pending' },
		{ id: 4, customerId: 104, customerName: 'Bob Brown', date: '2024-03-18', status: 'shipped' },
		{ id: 5, customerId: 105, customerName: 'Ella Williams', date: '2024-03-19', status: 'delivered' },
	]);

	const [selectedOrder, setSelectedOrder] = useState(null);
	const [isViewDialogOpen, setViewDialogOpen] = useState(false);
	const [isUpdateStatusDialogOpen, setUpdateStatusDialogOpen] = useState(false);

	const handleViewOrder = (order) => {
		setSelectedOrder(order);
		setViewDialogOpen(true);
	};

	const handleUpdateStatus = (order, newStatus) => {
		order.status = newStatus;
		setOrders([...orders]);
		setUpdateStatusDialogOpen(false);
	};

	const handleDeleteOrder = (orderId) => {
		setOrders(orders.filter(order => order.id !== orderId));
	};

	return (
		<section className="orders-table">
			<div className="table-responsive">
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th>Order ID</th>
							<th>Customer Name</th>
							<th>Date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr key={order.id}>
								<td>{order.id}</td>
								<td>{order.customerId}</td>
								<td>{order.date}</td>
								<td>{order.status}</td>
								<td>
									<button className="btn btn-primary mr-2" onClick={() => handleViewOrder(order)}>View</button>
									<button className="btn btn-info mr-2" onClick={() => setUpdateStatusDialogOpen(true)}>Update Status</button>
									<button className="btn btn-danger" onClick={() => handleDeleteOrder(order.id)}>Delete</button>

								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* View Order Details Dialog */}
			{isViewDialogOpen && (
				<div className="order-details-dialog">
					<h2>Order Details</h2>
					<p>Order ID: {selectedOrder.id}</p>
					<p>Customer ID: {selectedOrder.customerId}</p>
					<p>Date: {selectedOrder.date}</p>
					<p>Status: {selectedOrder.status}</p>
					<button className="btn btn-secondary" onClick={() => setViewDialogOpen(false)}>Close</button>
				</div>
			)}

			{/* Update Status Dialog */}
			{isUpdateStatusDialogOpen && (
				<div className="update-status-dialog">
					<h2>Update Order Status</h2>
					<select className="form-control mb-2" onChange={(e) => handleUpdateStatus(selectedOrder, e.target.value)}>
						<option value="pending">Pending</option>
						<option value="processing">Processing</option>
						<option value="delivered">Delivered</option>
						<option value="cancelled">Cancelled</option>
					</select>
					<button className="btn btn-primary" onClick={() => setUpdateStatusDialogOpen(false)}>Cancel</button>
				</div>
			)}
		</section>
	);
};

export default OrdersTable;
