import React from "react";
import estilos from "./item.module.css"
import { Link } from "react-router-dom";
const Item = ({items}) => {
    return(
        
            <div className={estilos.producto}>
        <img src={items.img} className={estilos.img} alt=""/>
         <h3>{items.nombre}</h3>
         <p>{items.precio}</p>
         <h4>{items.cantidad}</h4>
         <Link to={`/itemdetail/${items.id} `}>
         <button className={estilos.detalles}> Ver detalles</button>
         </Link>
         </div>
        
    )
}

export default Item