import '../components/_general.scss'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Cart} from '../components/cart/cart'
import {CartProvider} from '../context/cartContext'
import {Form} from '../components/form/form'
import {ItemDetailContainer} from '../components/itemDetailContainer/itemDetailContainer'
import {ItemListContainer} from '../components/itemListContainer/itemListContainer'
import {Navbar} from '../components/navBar/navBar'
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
          <Route path='/form'>
            <Form />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  )
}
export default App;