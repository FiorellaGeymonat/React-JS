import { useState } from "react";

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);
  const inc = () => setCount(c => (c < stock ? c + 1 : c));
  const dec = () => setCount(c => (c > 1 ? c - 1 : c));
  const add = () => onAdd?.(count);

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={dec} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={inc} disabled={count >= stock}>+</button>
      </div>
      <button className="btn primary" onClick={add} disabled={!stock}>Agregar</button>
    </div>
  );
}
