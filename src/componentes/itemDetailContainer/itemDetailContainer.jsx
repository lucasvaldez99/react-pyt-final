import React,{useEffect, useState} from "react"
 import ItemDetail from "../itemDetail/itemDetail"
import { useParams } from "react-router-dom"
import { db } from "../firebaseConfig"
import { collection, getDoc, doc } from "firebase/firestore"


const ItemDetailContainerm = ()=>{
const {idProd} = useParams();

//const product = productos.find((productos)=>productos.id === Number(idProd))

const [data, setData] = useState({})

useEffect(() =>{
    const productsCollection = collection(db, "productos")
    const ref = doc(productsCollection, idProd)

    getDoc(ref)
    .then((doc) =>{
        setData({
            id: doc.id,
            ...doc.data(),
        })
    })






},[idProd])


    return(
        
            <ItemDetail data={data}/>
        
    )
}


export default ItemDetailContainerm