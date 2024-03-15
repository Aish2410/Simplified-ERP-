// ProductForm.jsx

import React, { useState, useEffect } from 'react';

const ProductForm = ({ product, onSubmit }) => {
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [stock, setStock] = useState('');

	useEffect(() => {
		if (product) {
			setName(product.name);
			setCategory(product.category);
			setPrice(product.price.toString());
			setStock(product.stock.toString());
		}
	}, [product]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newProduct = { id: product ? product.id : generateProductId(), name, category, price: Number(price), stock: Number(stock) };
		onSubmit(newProduct);
		setName('');
		setCategory('');
		setPrice('');
		setStock('');
	};

	const generateProductId = () => {
		const maxId = Math.max(...products.map(product => product.id), 0);
		return maxId + 1;
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			<label>
				Category:
				<input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
			</label>
			<label>
				Price:
				<input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
			</label>
			<label>
				Stock:
				<input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
			</label>
			<button type="submit">{product ? 'Update Product' : 'Add Product'}</button>
		</form>
	);
};

export default ProductForm;
