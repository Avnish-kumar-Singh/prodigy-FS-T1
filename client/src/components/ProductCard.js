import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      width: '250px',
      margin: '10px',
      padding: '15px',
      textAlign: 'center',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)'
    }}>
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>
      <button style={{
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
