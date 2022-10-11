import React,{ useState,useContext }from "react";
export const CartContext = React.createContext('')


 export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

const [cart, SetCart] = useState([]);


const addProduct = (item , newQuantity) =>{
   
    const newCart = cart.filter(prod => prod.id !== item.id);
    newCart.push({...item, quantity: newQuantity})
    SetCart(newCart)
}
console.log('carrito',cart)



const clearCart = ()=> SetCart([])


const isToCart = (id) => {
    return cart.find(product => product.id === id) ? true : false;
}

const removeProduct = (id) => SetCart(cart.filter(product => product.id !== id))


const totalProducts = ()=> cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0);
    


const totalPrice = ()=>{
return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
}

    return (
        <CartContext.Provider value={{
clearCart,
isToCart,
removeProduct,
addProduct,
totalPrice,
totalProducts,

cart



        }}>
{children}
        </CartContext.Provider>
    )
}

export default CartProvider;