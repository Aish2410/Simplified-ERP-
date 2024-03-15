// ProductsTable.jsx

import React, { useState } from 'react';
import './ProductsTable.scss';
import ProductForm from './ProductForm';

const ProductsTable = () => {
	const [products, setProducts] = useState([
		{
			id: 1,
			name: "Laptop",
			description: " Dell Insprion 3593",
			category: "Electronics",
			price: 100,
			stock: 20,
		},
		{
			id: 2,
			name: "Iphone 15",
			description: "Smarphone",
			category: "Electronics",
			price: 150,
			stock: 15,
		},
		{
			id: 3,
			name: "Headphones",
			description: "Wired Headphones Boat",
			category: "Electronics",
			price: 150,
			stock: 15,
		},
		{
			id: 4,
			name: "Camera",
			description: "Digital Device",
			category: "Electronics",
			price: 150,
			stock: 15,
		},
		// Add more product data as needed
	]);

	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isAddDialogOpen, setAddDialogOpen] = useState(false);
	const [isEditDialogOpen, setEditDialogOpen] = useState(false);

	const handleViewProduct = (product) => {
		setSelectedProduct(product);
	};

	const handleCloseProductDetails = () => {
		setSelectedProduct(null);
	};

	const handleOpenAddDialog = () => {
		setAddDialogOpen(true);
	};

	const handleCloseAddDialog = () => {
		setAddDialogOpen(false);
	};

	const handleOpenEditDialog = () => {
		setEditDialogOpen(true);
	};

	const handleCloseEditDialog = () => {
		setEditDialogOpen(false);
	};

	const handleAddProduct = (product) => {
		setProducts([...products, product]);
		setAddDialogOpen(false);
	};

	const handleEditProduct = (editedProduct) => {
		setProducts(products.map(p => (p.id === editedProduct.id ? editedProduct : p)));
		setEditDialogOpen(false);
	};

	const handleDeleteProduct = (id) => {
		setProducts(products.filter(p => p.id !== id));
	};

	return (
		<section className="content-area-table">
			<div className="data-table-info">
				<h4 className="data-table-title">Products Management</h4>
				<div className="action-buttons">
					<button className="add-button" onClick={handleOpenAddDialog}>Add Product</button>
				</div>
			</div>
			<div className="data-table-diagram">
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Description</th>
							<th>Category</th>
							<th>Price</th>
							<th>Stock</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.description}</td>
								<td>{product.category}</td>
								<td>${product.price.toFixed(2)}</td>
								<td>{product.stock}</td>
								<td>
									<button className="view-button" onClick={() => handleViewProduct(product)}>View</button>
									<button className="edit-button" onClick={() => handleOpenEditDialog(product)}>Edit</button>
									<button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{selectedProduct && (
				<ProductDetailsBox product={selectedProduct} onClose={handleCloseProductDetails} />
			)}
			{isAddDialogOpen && (
				<AddEditProductDialog onClose={handleCloseAddDialog} onSubmit={handleAddProduct} />
			)}
			{isEditDialogOpen && (
				<AddEditProductDialog onClose={handleCloseEditDialog} onSubmit={handleEditProduct} product={selectedProduct} />
			)}
		</section>
	);
};

const ProductDetailsBox = ({ product, onClose }) => {
	return (
		<div className="product-details-box">
			<h2>Product Details</h2>
			<div>ID: {product.id}</div>
			<div>Name: {product.name}</div>
			<div>Description: {product.description}</div>
			<div>Category: {product.category}</div>
			<div>Price: ${product.price.toFixed(2)}</div>
			<div>Stock: {product.stock}</div>
			<button onClick={onClose}>Close</button>
		</div>
	);
};

const AddEditProductDialog = ({ onClose, onSubmit, product }) => {
	const [name, setName] = useState(product ? product.name : '');
	const [description, setDescription] = useState(product ? product.description : '');
	const [category, setCategory] = useState(product ? product.category : '');
	const [price, setPrice] = useState(product ? product.price.toString() : '');
	const [stock, setStock] = useState(product ? product.stock.toString() : '');

	const handleSubmit = (e) => {
		e.preventDefault();
		const editedProduct = { ...product, name, description, category, price: parseFloat(price), stock: parseInt(stock) };
		onSubmit(editedProduct);
		onClose();
	};

	return (
		<div className="add-edit-product-dialog">
			<h2>{product ? 'Edit Product' : 'Add Product'}</h2>
			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<label>Description:</label>
				<textarea value={description} onChange={(e) => setDescription(e.target.value)} />
				<label>Category:</label>
				<input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
				<label>Price:</label>
				<input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
				<label>Stock:</label>
				<input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
				<div className="button-container">
					<button type="submit">{product ? 'Update' : 'Add'}</button>
					<button type="button" onClick={onClose}>Cancel</button>
				</div>
			</form>
		</div>
	);
};

export default ProductsTable;
