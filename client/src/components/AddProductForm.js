import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    inStock: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'price' ? parseFloat(value) : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', form);
      alert('Product added');
      setForm({ name: '', price: '', description: '', image: '', inStock: true });
      if (onAdd) onAdd();
    } catch (err) {
      alert('Error adding product');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
      <h3>Add Product</h3>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" />
      <select name="inStock" value={form.inStock.toString()} onChange={handleChange}>
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddProductForm;
