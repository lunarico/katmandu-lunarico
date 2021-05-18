import {createContext, useState} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  
    const [contador, setContador] = useState(0)
    const [cart, setCart] = useState([])

    const quantityCount = () => {
      return cart.reduce((acc, item) => (acc += item.quantity), 0);
    };

    const isInCart = (id) => {
      return cart.find((item) => id === item.id)
    }
    
    const addItem = (item) => {
      if (isInCart(item.id)) {
        const newCart = [...cart]
        newCart.forEach((p) => {(p.id === item.id) && (p.quantity = p.quantity + contador)})
        setCart(newCart)
      }else{
        item.quantity = contador
        setCart([...cart, item])
      }
    };

    const removeFromCart = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId);
        setCart(newCart);
    };
      
    const clearCart = () => {
        setCart([]);
    };

    const totalProductPrice = (item) => {
      return item.quantity * item.precio
    }

    const totalPrice = (cart) => {
      return cart.map(p => totalProductPrice(p)).reduce((a,b) => a + b)
    } 

    return (
        <CartContext.Provider 
          value ={{cart, contador, setContador, quantityCount, addItem, removeFromCart, clearCart, totalProductPrice, totalPrice}}>
          {children}
        </CartContext.Provider>
    )
}
