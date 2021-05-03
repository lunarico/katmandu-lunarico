import Logo from '../img/logo.png'
import {Navbar} from '../components/navBar/navBar'
import {ItemListContainer} from '../components/itemListContainer/itemListContainer'
import {ItemDetailContainer} from '../components/itemDetailContainer/itemDetailContainer'
import {Productos} from './productos'
import {MiTalle} from './miTalle'
import {Envios} from './envios'
import {Contacto} from './contacto'
import {Carrito} from './carrito'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../components/_general.scss'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer logo={Logo}/>
        </Route>
        <Route path="/category/:categoryId">
          <ItemListContainer />
        </Route>
        <Route path="/item/:itemId">
          <ItemDetailContainer/>
        </Route>
        <Route path='/productos'>
          <Productos />
        </Route>
        <Route path='/miTalle'>
          <MiTalle />
        </Route>
        <Route path='/envios'>
          <Envios />
        </Route>
        <Route path='/contacto'>
          <Contacto />
        </Route>
        <Route path='/carrito'>
          <Carrito />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App;