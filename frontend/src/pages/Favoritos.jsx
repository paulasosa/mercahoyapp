import React, { useEffect, useState } from "react";
import api from "../services/api";

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };

        const { data } = await api.get("/favorites", config);

        setFavorites(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Productos Favoritos</h1>

      {favorites.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        favorites.map((favorite) => (
          <div
            key={favorite._id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "15px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>{favorite.product?.name}</h3>

            <p>
              Supermercado: {favorite.product?.supermarket}
            </p>

            <p>
              Precio: ${favorite.product?.price}
            </p>

            <p>
              Categoría: {favorite.product?.category}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Favoritos; 