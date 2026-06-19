const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./models/Product");

dotenv.config();

const products = [
  // 🟡 GRANO BÁSICO
  {
    name: "Arroz Diana 500g",
    category: "Granos",
    prices: [
      { supermarket: "D1", price: 3200 },
      { supermarket: "Ara", price: 3400 },
      { supermarket: "Exito", price: 3600 },
      { supermarket: "Jumbo", price: 3500 }
    ]
  },
  {
    name: "Lentejas 500g",
    category: "Granos",
    prices: [
      { supermarket: "D1", price: 2800 },
      { supermarket: "Ara", price: 3000 },
      { supermarket: "Exito", price: 3200 },
      { supermarket: "Jumbo", price: 3100 }
    ]
  },
  {
    name: "Frijol Rojo 500g",
    category: "Granos",
    prices: [
      { supermarket: "D1", price: 4200 },
      { supermarket: "Ara", price: 4500 },
      { supermarket: "Exito", price: 4800 },
      { supermarket: "Jumbo", price: 4600 }
    ]
  },
  {
    name: "Garbanzo 500g",
    category: "Granos",
    prices: [
      { supermarket: "D1", price: 3900 },
      { supermarket: "Ara", price: 4100 },
      { supermarket: "Exito", price: 4300 },
      { supermarket: "Jumbo", price: 4200 }
    ]
  },
  {
    name: "Arveja Verde 500g",
    category: "Granos",
    prices: [
      { supermarket: "D1", price: 3500 },
      { supermarket: "Ara", price: 3700 },
      { supermarket: "Exito", price: 3900 },
      { supermarket: "Jumbo", price: 3800 }
    ]
  },

  // 🥛 LÁCTEOS
  {
    name: "Leche Entera 1L",
    category: "Lácteos",
    prices: [
      { supermarket: "D1", price: 3200 },
      { supermarket: "Ara", price: 3400 },
      { supermarket: "Exito", price: 3600 },
      { supermarket: "Jumbo", price: 3550 }
    ]
  },
  {
    name: "Yogurt Natural 1L",
    category: "Lácteos",
    prices: [
      { supermarket: "D1", price: 4500 },
      { supermarket: "Ara", price: 4700 },
      { supermarket: "Exito", price: 5000 },
      { supermarket: "Jumbo", price: 4900 }
    ]
  },
  {
    name: "Queso Campesino 500g",
    category: "Lácteos",
    prices: [
      { supermarket: "D1", price: 8900 },
      { supermarket: "Ara", price: 9200 },
      { supermarket: "Exito", price: 9500 },
      { supermarket: "Jumbo", price: 9400 }
    ]
  },

  // 🧴 ASEO
  {
    name: "Detergente Líquido 1L",
    category: "Aseo",
    prices: [
      { supermarket: "D1", price: 8500 },
      { supermarket: "Ara", price: 8800 },
      { supermarket: "Exito", price: 9200 },
      { supermarket: "Jumbo", price: 9100 }
    ]
  },
  {
    name: "Jabón de Loza",
    category: "Aseo",
    prices: [
      { supermarket: "D1", price: 2500 },
      { supermarket: "Ara", price: 2700 },
      { supermarket: "Exito", price: 3000 },
      { supermarket: "Jumbo", price: 2900 }
    ]
  },
  {
    name: "Cloro 1L",
    category: "Aseo",
    prices: [
      { supermarket: "D1", price: 1800 },
      { supermarket: "Ara", price: 2000 },
      { supermarket: "Exito", price: 2200 },
      { supermarket: "Jumbo", price: 2100 }
    ]
  },

  // 🥩 CARNES
  {
    name: "Pechuga de Pollo 1kg",
    category: "Carnes",
    prices: [
      { supermarket: "D1", price: 12900 },
      { supermarket: "Ara", price: 13500 },
      { supermarket: "Exito", price: 14200 },
      { supermarket: "Jumbo", price: 14000 }
    ]
  },
  {
    name: "Carne Molida 1kg",
    category: "Carnes",
    prices: [
      { supermarket: "D1", price: 15800 },
      { supermarket: "Ara", price: 16200 },
      { supermarket: "Exito", price: 17000 },
      { supermarket: "Jumbo", price: 16800 }
    ]
  },

  // 🥤 BEBIDAS
  {
    name: "Gaseosa Coca Cola 1.5L",
    category: "Bebidas",
    prices: [
      { supermarket: "D1", price: 4200 },
      { supermarket: "Ara", price: 4500 },
      { supermarket: "Exito", price: 4800 },
      { supermarket: "Jumbo", price: 4700 }
    ]
  },
  {
    name: "Agua 600ml",
    category: "Bebidas",
    prices: [
      { supermarket: "D1", price: 1200 },
      { supermarket: "Ara", price: 1300 },
      { supermarket: "Exito", price: 1500 },
      { supermarket: "Jumbo", price: 1400 }
    ]
  },
];


const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo conectado");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Productos cargados 🚀");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seed();