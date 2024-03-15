import React, { useState } from 'react';
import ProductsTable from './ProductsTable';
import ProductForm from './ProductForm';
import './ProductsTable.css';

const ProductsManagement = () => {
	const [products, setProducts] = useState([
		{
			id: 1,
			name: "Product 1",
			category: "Category 1",
			price: 100,
			stock: 20,
		},
		{
			id: 2,
			name: "Product 2",
			category: "Category 2",
			price: 150,
			stock: 15,
		},
		// Add more product data as needed
	]);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const handleAddProduct = (product) => {
		const newProduct = { ...product, id: generateProductId() };
		setProducts([...products, newProduct]);
	};

	const handleEditProduct = (editedProduct) => {
		const updatedProducts = products.map(product =>
			product.id === editedProduct.id ? editedProduct : product
		);
		setProducts(updatedProducts);
		setSelectedProduct(null);
	};

	const handleDeleteProduct = (productId) => {
		const updatedProducts = products.filter(product => product.id !== productId);
		setProducts(updatedProducts);
	};

	const generateProductId = () => {
		const maxId = Math.max(...products.map(product => product.id), 0);
		return maxId + 1;
	};

	return (
		<div>
			<h2>Products Management</h2>
			<ProductForm
				product={selectedProduct}
				onSubmit={(product) => {
					if (selectedProduct) {
						handleEditProduct(product);
					} else {
						handleAddProduct(product);
					}
				}}
			/>
			<ProductsTable
				products={products}
				onEdit={(product) => setSelectedProduct(product)}
				onDelete={handleDeleteProduct}
			/>
		</div>
	);
};

export default ProductsManagement;
