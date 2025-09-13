import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../data/api";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchProducts(categoryId)
      .then((data) => {
        setItems(data);
        console.log("Productos recibidos:", data); // 👈 debug en consola
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando catálogo...</p>;
  if (error) return <p>Error cargando productos: {error}</p>;

  return (
    <section>
      <h2 className="greeting">{greeting}</h2>
      {categoryId && <p>Estás viendo la categoría: <strong>{categoryId}</strong></p>}
      <p style={{opacity:.7, marginTop:4}}>Items recibidos: <b>{items.length}</b></p> {/* 👈 debug visual */}
      <ItemList items={items} />
    </section>
  );
}

export default ItemListContainer;
