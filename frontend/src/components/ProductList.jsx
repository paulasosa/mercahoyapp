import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Productos</h2>

      {products.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        products.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{p.name}</h3>
            <p>{p.category}</p>
          </div>
        )) 
      )}
    </div>
  );
};

export default ProductList;