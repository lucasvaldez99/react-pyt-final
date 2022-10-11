import React from "react"
import { useCartContext } from "../../context/CardContext"
import estilos from "./itemCart.module.css"


const ItemCart = ({ producto }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className={estilos.container}>
            <div className={estilos.producto}>
                <p className={estilos.titulo}>Nombre: {producto.nombre}</p>
                <p className={estilos.titulo}>Cantidad: {producto.quantity}</p>
                <p className={estilos.titulo}>precio x unidad: ${producto.precio}</p>
                <img  className={estilos.img} src={producto.img} alt="" />
                <p className={estilos.titulo}>subtotal: {producto.quantity * producto.precio}</p>
                <button onClick={() => removeProduct(producto.id)}>eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart