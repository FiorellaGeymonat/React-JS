import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../data/api";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchProductById(itemId)
      .then(setItem)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>El producto no existe.</p>;

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
