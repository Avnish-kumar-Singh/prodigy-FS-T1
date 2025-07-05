import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UpdateProductForm from '../components/UpdateProductForm';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => {
        console.error(err);
        alert("Failed to fetch product");
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Product</h2>
      <UpdateProductForm product={product} />
    </div>
  );
};

export default EditProduct;
