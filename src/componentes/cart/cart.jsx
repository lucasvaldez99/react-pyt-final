import React, {useState}from "react"
import { useCartContext } from "../../context/CardContext"
import { Link } from "react-router-dom";
import ItemCart from "../itemCart/itemCart";
import estilos from "./cart.module.css"
import Form from "../form/form";

const Cart = () => {
const [idCompra, setIdCompra] = useState('')
const { cart, totalPrice,clearCart } = useCartContext();

const handleId = (id)=>{
    setIdCompra(id)
}
if(idCompra){
    return( 
        <h1>tu numero de compra es:{idCompra} </h1>
    )
}



 if(cart.length === 0){
    return(
    <>
    <p className={estilos.pr}>por favor agrega productos al carrito</p>
    <Link className={estilos.link} to='/'>Click aqui Para agregar productos</Link>

    </>)
 }
 return(
    <div>
        {
            cart.map(producto => <ItemCart key={producto.id} producto={producto}/>)
            
        }
        <div className={estilos.containerBtn}> <button className={estilos.btnEliminar} onClick={clearCart}>VACIAR CARRITO</button></div>
       
        <p className={estilos.total}>
            Total:${totalPrice()}
        </p>
        <Form cart={cart} totalPrice={totalPrice} clearCart={clearCart} handleId={handleId}/>
    </div>
 )

}

export default Cart