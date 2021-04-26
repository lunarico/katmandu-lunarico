import '../components/_general.scss'
import {Navbar} from '../components/navBar/navBar'
import {ItemListContainer} from '../components/itemListContainer/itemListContainer'
import {ItemCount} from '../components/itemCount/itemCount'
import Logo from '../img/logo.png'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer logo={Logo}/>
      <ItemCount stock = "5" initial = "1" />
    </div>
  )
}

export default App;