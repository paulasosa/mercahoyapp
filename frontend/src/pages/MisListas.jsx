import React, { useEffect, useState } from "react";
import api from "../services/api";

const MisListas = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };

        const { data } = await api.get("/lists", config);

        setLists(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLists();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mis Listas de Compras</h1>

      {lists.length === 0 ? (
        <p>No tienes listas guardadas.</p>
      ) : (
        lists.map((list) => (
          <div
            key={list._id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h2>{list.name}</h2>

            <h4>Productos:</h4>

            {list.products.map((product, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  paddingLeft: "10px",
                }}
              >
                <p>Producto: {product.name}</p>
                <p>Precio: ${product.price}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default MisListas; 