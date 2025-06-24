import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Products
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-xl transition duration-300"
          >
            <Link to={`/products/${product.id}`} className="block p-4">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                {product.title}
              </h2>
              <p className="text-green-600 font-medium">${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
