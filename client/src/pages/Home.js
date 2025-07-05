import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import UpdateProductForm from '../components/UpdateProductForm';
import AddProductForm from '../components/AddProductForm';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 👇 function to load products
  const fetchProducts = () => {
    axios
      .get('http://localhost:5000/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpdateSuccess = () => {
    setSelectedProduct(null); // hide the form
    fetchProducts(); // refresh products list
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>

      {/* ✅ Add Product Form */}
      <AddProductForm onAdd={fetchProducts} />

      {/* ✅ Product List */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product._id} style={{ margin: '10px' }}>
            <ProductCard product={product} />
            <button onClick={() => setSelectedProduct(product)}>Edit</button>
          </div>
        ))}
      </div>

      {/* ✅ Update Form shown only when a product is selected */}
      {selectedProduct && (
        <div style={{ marginTop: '30px' }}>
          <UpdateProductForm
            product={selectedProduct}
            onUpdate={handleUpdateSuccess}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
