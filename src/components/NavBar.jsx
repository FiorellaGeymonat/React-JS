import CartWidget from "./CartWidget"
import "../App.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">🥞 The Pancake Co.</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Mix Proteico</a></li>
        <li><a href="#">Accesorios</a></li>
        <li><a href="#">Ebooks</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar
