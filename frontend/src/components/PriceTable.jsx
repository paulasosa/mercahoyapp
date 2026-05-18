import React from "react";
const PriceTable = ({ products }) => {
  // Agrupar productos por nombre
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.name]) {
      acc[product.name] = [];
    }

    acc[product.name].push(product);

    return acc;
  }, {});

  return (
    <div>
      <h2>Tabla Comparativa de Precios</h2>

      {Object.keys(groupedProducts).map((productName) => {
        // Ordenar precios de menor a mayor
        const sortedProducts = groupedProducts[productName].sort(
          (a, b) => a.price - b.price
        );

        const cheapestPrice = sortedProducts[0]?.price;

        return (
          <div
            key={productName}
            style={{
              border: "1px solid #ccc",
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>{productName}</h3>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr>
                  <th>Supermercado</th>
                  <th>Precio</th>
                  <th>Categoría</th>
                  <th>Mejor Oferta</th>
                </tr>
              </thead>

              <tbody>
                {sortedProducts.map((product) => (
                  <tr key={product._id}>
                    <td>{product.supermarket}</td>

                    <td>${product.price}</td>

                    <td>{product.category}</td>

                    <td>
                      {product.price === cheapestPrice
                        ? "✅ Más económico"
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default PriceTable; 