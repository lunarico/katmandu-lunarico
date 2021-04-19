import {Navbar} from './components/navBar/navBar'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'
import {ListaProductos} from './components/listaProductos/listaProductos'

function App() {
  const Bienvenida = 'Bienvenidxs a Katmandú';

  const anillos = [{
    nombre: 'piedra',
    precio: 1000,
  },{
    nombre: 'sin piedra',
    precio: 700,
  }]

  const collares = [{
    nombre: 'cadena',
    precio: 1200,
  },{
    nombre: 'gargantilla',
    precio: 900,
  }]

  const pulseras = [{
    nombre: 'plata',
    precio: 1500,
  },{
    nombre: 'acero',
    precio: 700,
  }]

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting = {Bienvenida}/>
      <ListaProductos productos = {anillos} />
      <ListaProductos productos = {collares} />
      <ListaProductos productos = {pulseras} />
    </div>
  )
}

export default App;