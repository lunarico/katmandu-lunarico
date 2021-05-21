import {createContext, useState} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  
    const [cart, setCart] = useState([])

    const isInCart = item => cart.find(product => product.id === item.id);

    const addItem = (item, quantity) => {

      if(isInCart(item)) {
        const newCart = [...cart]
        newCart[newCart.findIndex(prod => prod.id === item.id)].quantity += quantity;
        setCart(newCart);
        return;
      }
        item.quantity = quantity;
        setCart([...cart, item])

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
    };

    const totalPrice = (cart) => {
      return cart.map(p => totalProductPrice(p)).reduce((a,b) => a + b)
    }; 

    const actuallyCount = (item, newQuantity) => {
      const newCart = [...cart];
      const inCart = isInCart(item);
      if(inCart) {
          newCart[newCart.findIndex(prod => prod.id === item.id)].quantity = newQuantity;
          setCart(newCart);
          console.log(inCart);
      }
  }

    return (
        <CartContext.Provider 
          value ={{cart, addItem, removeFromCart, clearCart, totalProductPrice, totalPrice, actuallyCount}}>
          {children}
        </CartContext.Provider>
    )
}
