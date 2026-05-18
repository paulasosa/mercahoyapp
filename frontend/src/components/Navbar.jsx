import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link> |
      <Link to="/comparador">Comparador</Link> |
      <Link to="/carrito">Carrito</Link>
    </nav>
  );
};

export default Navbar; 