import React,{useState} from "react";
import {addDoc, collection,serverTimestamp} from "firebase/firestore";
import { db } from '../firebaseConfig';


const Form= ({cart, totalPrice,clearCart,handleId})=>{ 
    const [nombre, setnombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail]= useState('')
    const [telefono, setTelefono] = useState('')

const total = totalPrice()

    const handleSubmit = (event)=>{
        event.preventDefault()

        const orden ={
            info: {nombre:nombre , apellido: apellido, email: email, telefono: telefono },
            productos : cart,
            total : total,
            date : serverTimestamp()
        }

        const ordenCollection = collection(db, 'ordenes')


        addDoc (ordenCollection, orden).then((res)=>{
            handleId(res.id)
            clearCart()
        })
    }

const handleChangeEmail = (event)=>{
    setEmail(event.target.value)
}

const handleChangeNombre = (event)=>{
    setnombre(event.target.value)
}

const handleChangeApellido = (event )=>{
    setApellido(event.target.value)
}
const handleChangeTelefono =(event)=>{
    setTelefono(event.target.value)
}

return(
<div>
    <form action="" onSubmit={handleSubmit}>
<input type="text" 
placeholder="Nombre"
name="nombre"
value={nombre}
onChange={handleChangeNombre}

/>
<input type="number"
placeholder="Numero de telefono"
name="Telefono"
value={telefono}
onChange={handleChangeTelefono}/>

<input type="text"
placeholder="email"
name="email"
value={email}
onChange={handleChangeEmail}/>

<input type="text"
placeholder="apellido"
name="apellido"
value={apellido}
onChange={handleChangeApellido}
/>
<button>Enviar</button>

</form>
</div>



)
}
export default Form