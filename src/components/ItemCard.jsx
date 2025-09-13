import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <article className="card">
      {item.image && <img src={item.image} alt={item.title} />}
      <div className="card-body">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <Link to={`/item/${item.id}`} className="btn">Ver detalle</Link>
      </div>
    </article>
  );
}
