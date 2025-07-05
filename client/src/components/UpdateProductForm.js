import React, { useState } from 'react';
import axios from 'axios';

const UpdateProductForm = ({ product, onUpdate }) => {
  const [form, setForm] = useState({
    name: product.name || '',
    price: product.price || '',
    description: product.description || '',
    image: product.image || '',
    inStock: product.inStock || false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === 'inStock'
          ? value === 'true'
          : name === 'price'
          ? parseFloat(value) || ''
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${product._id}`, form);
      alert('Product updated successfully');
      if (onUpdate) onUpdate();
    } catch (error) {
      console.error(error);
      alert('Failed to update');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h3>Edit Product</h3>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />

      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        step="0.01"
        required
      />

      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      />

      <input
        type="text"
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
      />

      <select name="inStock" value={form.inStock.toString()} onChange={handleChange}>
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>

      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateProductForm;
