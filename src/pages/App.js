import {Navbar} from '../components/navBar/navBar'
import {ItemListContainer} from '../components/itemListContainer/itemListContainer'
import {ItemCount} from '../components/itemCount/itemCount'
import {ListaProductos} from '../components/listaProductos/listaProductos'
import '../components/_general.scss'
import {useEffect, useState} from 'react'

function App() {
  const Bienvenida = 'Bienvenidxs a Katmandú';
  const [anillos, setAnillos] = useState([
    { nombre: 'piedra',
      precio: 1000,
    },{
      nombre: 'sin piedra',
      precio: 700,
    }
  ])

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
      <ItemCount stock = "5" initial = "1" />
      <div>
        {anillos.map((anillo) => (
              <div>
                <h4>{anillo.nombre}</h4>
                <p>{anillo.precio}</p>
              </div>
        ))}
      </div>
      <ListaProductos productos = {collares} />
      <ListaProductos productos = {pulseras} />
    </div>
  )
}

export default App;