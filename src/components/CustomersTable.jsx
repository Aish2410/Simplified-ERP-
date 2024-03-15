import React from 'react';
import './customerTable.css'; 

const CustomersTable = () => {
	const customers = [
		{
			id: 1,
			name: "John Doe",
			email: "john@example.com",
			phone: "123-456-7890",
			country: "USA",
		},
		{
			id: 2,
			name: "Jane Smith",
			email: "jane@example.com",
			phone: "987-654-3210",
			country: "Canada",
		},
		{
			id: 3,
			name: "Alice Johnson",
			email: "alice@example.com",
			phone: "555-555-5555",
			country: "UK",
		},
		{
			id: 4,
			name: "Alex",
			email: "alexe@example.com",
			phone: "555-555-5555",
			country: "UK",
		},
		{
			id: 5,
			name: "Bob",
			email: "Bob@example.com",
			phone: "555-555-5555",
			country: "canada",
		},
		
	];

	return (
		<section className="content-area-table">
			<div className="data-table-info">
				<h4 className="data-table-title">Customers List</h4>
			</div>
			<div className="data-table-diagram">
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Country</th>
						</tr>
					</thead>
					<tbody>
						{customers.map((customer) => (
							<tr key={customer.id}>
								<td>{customer.id}</td>
								<td>{customer.name}</td>
								<td>{customer.email}</td>
								<td>{customer.phone}</td>
								<td>{customer.country}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default CustomersTable;
