import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
  const handleAdd = (qty) => {
    console.log("Agregar al carrito:", item.id, "cant:", qty);
    // luego acá integrarás el carrito real
  };

  return (
    <section className="detail">
      <img src={item.image} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <p className="price">${item.price}</p>
        <p>{item.description}</p>
        <p>Stock: {item.stock}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      </div>
    </section>
  );
}
