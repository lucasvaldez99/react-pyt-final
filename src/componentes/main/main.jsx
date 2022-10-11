import React from "react"
import estilo from './main.module.css'

const Main = ()=>{
    return(
        <main className={estilo.main}>
       <h2 className={estilo.h2}>¿Por que no darle un gustito a los mas mimados de la Flia?</h2>
       <p className={estilo.parrafo}>En esta tienda encontraras, collares,chalecos,alimento,juguetes y mucho mas...</p>
       <img className={estilo.image} src="https://res.cloudinary.com/dgb1r2nnn/image/upload/v1661700747/cld-sample.jpg" alt="" />
       </main>
        )
}
export default Main