import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const OrdersCalendarView = () => {
	const [date, setDate] = useState(new Date());
	const [orders, setOrders] = useState([]);

	const onChange = (date) => {
		setDate(date);
		fetchOrders(date);
	};

	const fetchOrders = (date) => {
		
		const formattedDate = formatDate(date);
		console.log('Fetching orders for:', formattedDate);
		
		const dummyOrders = [
			{ id: 1, productName: 'Laptop', status: 'Delivered' },
			{ id: 2, productName: 'Mobile', status: 'Delivered' },
			{ id: 3, productName: 'Digital Camera', status: 'Pending' },
		];
		setOrders(dummyOrders);
	};

	const formatDate = (date) => {
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	};

	return (
		<div>
			<h2>Orders Calendar View</h2>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
				<Calendar
					onChange={onChange}
					value={date}
				/>
			</div>
			<div>
				<h3>Order History</h3>
				<table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
					<thead>
						<tr>
							<th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Product</th>
							<th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Status</th>
						</tr>
					</thead>
					<tbody>
						{orders.map(order => (
							<tr key={order.id}>
								<td style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{order.productName}</td>
								<td style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{order.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OrdersCalendarView;
