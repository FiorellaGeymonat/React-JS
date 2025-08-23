import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import "./App.css"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="✨ Tu panquque proteico te espera! ✨" />
    </div>
  )
}

export default App
