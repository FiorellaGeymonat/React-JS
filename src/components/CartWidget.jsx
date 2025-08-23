function CartWidget() {
  return (
    <button className="cart-widget" aria-label="Carrito">
      <span className="icon" role="img" aria-hidden="true">🛒</span>
      <span className="cart-count">0</span>
    </button>
  )
}

export default CartWidget
