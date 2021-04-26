import { useState } from 'react/cjs/react.development'
import {Item} from '../item/item'
import './_itemList.scss'

export const ItemList = () => {
    const anillos = ([
        {   imagen: 'anillos/wave.jpg',
            nombre: 'wave',
            precio: 1100,
        },{
            imagen: 'anillos/camboya.jpg',
            nombre: 'camboya',
            precio: 1600,
        },{
            imagen: 'anillos/moon.jpg',
            nombre: 'moon',
            precio: 1000,
        },{
            imagen: 'anillos/world.jpg',
            nombre: 'world',
            precio: 1200,
        },{
            imagen: 'anillos/bali.jpg',
            nombre: 'bali',
            precio: 1400,
        },{
            imagen: 'anillos/shell.jpg',
            nombre: 'shell',
            precio: 1500,
        },{
            imagen: 'anillos/elephants.jpg',
            nombre: 'elephants',
            precio: 1550,
        },{
            imagen: 'anillos/phuket.jpg',
            nombre: 'phuket',
            precio: 1750,
        },{
            imagen: 'anillos/whale.jpg',
            nombre: 'whale',
            precio: 1350,
        },{
            imagen: 'anillos/mandala.jpg',
            nombre: 'mandala',
            precio: 1200,
        },{
            imagen: 'anillos/feather.jpg',
            nombre: 'feather',
            precio: 1700,
        },{
            imagen: 'anillos/zodiac.jpg',
            nombre: 'zodiac',
            precio: 1000,
        },{
            imagen: 'anillos/midiSeaTurtle.jpg',
            nombre: 'midi sea turtle',
            precio: 1000,
        },{
            imagen: 'anillos/midiAtenas.jpg',
            nombre: 'midi atenas',
            precio: 800,
        },{
            imagen: 'anillos/midiStarfish.jpg',
            nombre: 'midi starfish',
            precio: 900,
        },{
            imagen: 'anillos/midiBeachMoon.jpg',
            nombre: 'midi beach moon',
            precio: 900,
        }
      ])
    const collares = ([
        {   imagen: 'collares/world.jpg',
            nombre: 'world',
            precio: 1600,
        },{
            imagen: 'collares/marocco.jpg',
            nombre: 'marocco',
            precio: 2300,
        },{
            imagen: 'collares/circle.jpg',
            nombre: 'circle',
            precio: 1500,
        },{
            imagen: 'collares/whale.jpg',
            nombre: 'whale',
            precio: 1800,
        },{
            imagen: 'collares/wave.jpg',
            nombre: 'wave',
            precio: 1600,
        },{
            imagen: 'collares/sea.jpg',
            nombre: 'sea',
            precio: 1900,
        },{
            imagen: 'collares/phuket.jpg',
            nombre: 'phuket',
            precio: 1900,
        },{
            imagen: 'collares/chokerShell.jpg',
            nombre: 'choker shell',
            precio: 2200,
        }
    ])

    const [listaJoyas, setListaJoyas] = useState([])

    const listaAnillos = async () => {
        try {
            setTimeout (() => {
                setListaJoyas(anillos)}, 2000)
        }catch{
            setListaJoyas('Disculpanos, en este momento tenemos problemas de conexión')
        }
    }
    const listaCollares = async () => {
        try {
            setTimeout (()=>{
                setListaJoyas(collares)},2000)
        }catch{
            setListaJoyas('Disculpanos, en este momento tenemos problemas de conexión')
        }
    }

    return (
        <div>
            <div className="btnProductos">
                <button onClick={listaAnillos} className="btnKatmandu">Anillos</button>
                <button onClick={listaCollares} className="btnKatmandu">Collares</button>
                <button className="btnKatmandu">Aros</button>
                <button className="btnKatmandu">Pulseras</button>
            </div>
            <div className="listaProductos">
                {listaJoyas.length > 0 ? (
                    listaJoyas.map((props) => <Item producto={props} />)
                ) : (
                <p></p>)}
            </div>
        </div>
    )
}
/*export const ItemList = () => {
    const anillos = ([
    {   imagen: 'wave.jpg',
        nombre: 'wave',
        precio: 1100,
    },{
        imagen: 'camboya.jpg',
        nombre: 'camboya',
        precio: 1600,
    },{
        imagen: 'moon.jpg',
        nombre: 'moon',
        precio: 1000,
    },{
        imagen: 'world.jpg',
        nombre: 'world',
        precio: 1200,
    },{
        imagen: 'bali.jpg',
        nombre: 'bali',
        precio: 1400,
    },{
        imagen: 'shell.jpg',
        nombre: 'shell',
        precio: 1500,
    },{
        imagen: 'elephants.jpg',
        nombre: 'elephants',
        precio: 1550,
    },{
        imagen: 'phuket.jpg',
        nombre: 'phuket',
        precio: 1750,
    },{
        imagen: 'whale.jpg',
        nombre: 'whale',
        precio: 1350,
    },{
        imagen: 'mandala.jpg',
        nombre: 'mandala',
        precio: 1200,
    },{
        imagen: 'feather.jpg',
        nombre: 'feather',
        precio: 1700,
    },{
        imagen: 'zodiac.jpg',
        nombre: 'zodiac',
        precio: 1000,
    },{
        imagen: 'midiSeaTurtle.jpg',
        nombre: 'midi sea turtle',
        precio: 1000,
    },{
        imagen: 'midiAtenas.jpg',
        nombre: 'midi atenas',
        precio: 800,
    },{
        imagen: 'midiStarfish.jpg',
        nombre: 'midi starfish',
        precio: 900,
    },{
        imagen: 'midiBeachMoon.jpg',
        nombre: 'midi beach moon',
        precio: 900,
    }
  ])

  return (
      <div className="listaProductos">
        {anillos.map((anillo) => (
            <Item anillo = {anillo} />
        ))}
      </div>
  )
}*/