// src/pages/ItemsDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemsDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product)
    return <div className="p-6 text-center text-gray-500">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <p className="text-xl text-green-600 font-bold mb-2 ml-2">
        <strong>Price:$</strong>
        {product.price}
      </p>
      <p className="text-gray-700 leading-relaxed">
        <strong>Description:</strong>
        {product.description}
      </p>
      <p className="text-gray-700 leading-relaxed">
        <strong>Rating:</strong>
        {product.rating}
      </p>
    </div>
  );
}

export default ItemsDetail;
