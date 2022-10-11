import React from "react"
import { useCartContext } from "../../context/CardContext"
import { useState} from "react"
import { Link } from "react-router-dom"
import Contador from "../contador/contador"
import estilo from "./itemDetail.module.css"





const ItemDetail = ({data})=>{

const [goToCart, setToCart] = useState(false)    

const {addProduct} = useCartContext();

const agregar = (quantity) =>{
    setToCart(true)
    addProduct(data, quantity)
}
   
    return(
        <div className={estilo.container}>
    <h2>{data.nombre}</h2>
     <h3 className={estilo.titulo}><b className={estilo.precioos}>Detalles:</b> {data.desc}</h3>
     <p className={estilo.pp} ><b className={estilo.precioos}>Precio:</b> ${data.precio}</p>
     <img className={estilo.precio} src={data.img} alt="" />
    {
        goToCart
        ? <Link to='/cart' className={estilo.cart}>ver productos</Link>
        : <Contador initial={1} stock={15} onAdd={agregar}/>
    }
     </div>
    )
}
export default ItemDetail