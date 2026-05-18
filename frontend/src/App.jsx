import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Comparador from "./pages/Comparador";
import Carrito from "./pages/Carrito";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/comparador" element={<Comparador />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App; 