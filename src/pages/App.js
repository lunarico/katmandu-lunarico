import '../components/_general.scss'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Cart} from '../components/cart/cart'
import {CartProvider} from '../context/cartContext'
import {Contacto} from './contacto'
import {Envios} from './envios'
import {ItemDetailContainer} from '../components/itemDetailContainer/itemDetailContainer'
import {ItemListContainer} from '../components/itemListContainer/itemListContainer'
import {MiTalle} from './miTalle'
import {Navbar} from '../components/navBar/navBar'
import {Productos} from './productos'
import Logo from '../img/logo.png'

function App() {
  return (
    <CartProvider>
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
          <Route path="/cart">
            <Cart />
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
        </Switch>
      </BrowserRouter>
    </CartProvider>
  )
}
export default App;