const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./models/Product");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "Arroz Diana 500g",
    category: "Granos",
    prices: [
      {
        supermarket: "D1",
        price: 3200,
      },
      {
        supermarket: "Ara",
        price: 3400,
      },
      {
        supermarket: "Exito",
        price: 3600,
      },
      {
        supermarket: "Jumbo",
        price: 3500,
      },
    ],
  },

  {
    name: "Aceite Premier 900ml",
    category: "Despensa",
    prices: [
      {
        supermarket: "D1",
        price: 11800,
      },
      {
        supermarket: "Ara",
        price: 11500,
      },
      {
        supermarket: "Exito",
        price: 12300,
      },
      {
        supermarket: "Jumbo",
        price: 12100,
      },
    ],
  },
];

const seedData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Productos cargados correctamente");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();