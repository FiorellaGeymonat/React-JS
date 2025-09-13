import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer" // lo vamos a crear
import NotFound from "./components/NotFound" // lo vamos a crear
import "./App.css"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="✨ Tu panqueque proteico te espera! ✨" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por categoría" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
