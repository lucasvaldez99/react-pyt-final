import React, { useState } from "react";
import estilos from './contador.module.css'

const Contador = ({stock,initial,onAdd}) =>{
 
   const [count, setCount] = useState(0)
 
 
const sumar = () =>{
   count < stock ? setCount(count + 1) : alert('llegaste al maximo que podes comprar')
}

const restar = ()=>{
   count > initial ? setCount(count - 1) : alert("tenes que agregar productos")
}


    return(
        <div className={estilos.contenedorDiv}>
            <button className={estilos.acciones} onClick={sumar}>+</button>
            <button className={estilos.acciones} onClick={restar}>-</button>
            <p className={estilos.Productos}>Productos = {count}</p>
            <button className={estilos.btnAgregar} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Contador