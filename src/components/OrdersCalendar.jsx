import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import OrderDetailsCard from './OrderDetailsCard';
// import './OrderDetailsCard.css';

const localizer = momentLocalizer(moment);

const OrdersCalendar = () => {
	const [selectedOrder, setSelectedOrder] = useState(null);

	// Sample orders data
	const orders = [
		{ id: 1, title: 'Order 1', start: new Date(2024, 2, 12), end: new Date(2024, 2, 12), status: 'Pending' },
		{ id: 2, title: 'Order 2', start: new Date(2024, 2, 13), end: new Date(2024, 2, 13), status: 'Shipped' },
		{ id: 3, title: 'Order 3', start: new Date(2024, 2, 14), end: new Date(2024, 2, 14), status: 'Delivered' }
	];

	// Function to handle selecting a date
	const handleSelectEvent = (event) => {
		const clickedOrder = orders.find(order => event.start.getTime() === order.start.getTime());
		setSelectedOrder(clickedOrder);
	};

	return (
		<div className="orders-calendar-container">
			<h2 className="text-center mb-4">Orders Calendar View</h2>
			<div className="calendar-container">
				<Calendar
					localizer={localizer}
					events={orders}
					startAccessor="start"
					endAccessor="end"
					style={{ height: 500 }}
					onSelectEvent={handleSelectEvent}
				/>
			</div>
			{selectedOrder && (
				<div className="order-details-container">
					<OrderDetailsCard order={selectedOrder} />
				</div>
			)}
		</div>
	);
}

export default OrdersCalendar;
