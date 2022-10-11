import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import  ItemList  from '../itemList/itemList'
import { CombSpinner } from "react-spinners-kit";
import estilos from'./itemList.module.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ItemListContainer = () =>{
    const [items, setItems] = useState([])
 const [isloanding, setLoanding] = useState(true)


const {categoriasName} = useParams()

    useEffect(()=> {
   
       
       const productosCollection = collection(db, "productos")
       

   if (categoriasName) {
    const prodFilter = query(
      productosCollection,where("categoria","==",categoriasName)
    )
    getDocs(prodFilter).then((res) =>
        setItems(res.docs.map((product) => ({ id: product.id, ...product.data() }))
        ) 
      );
   } else {
    getDocs(productosCollection).then((res) =>
    setItems(
      res.docs.map((product) => ({ id: product.id, ...product.data() }))
    )
  );
   }
        


      
   setLoanding(false)

    }, [categoriasName])
    

    return(
    <div className={estilos.contenedor}>
{isloanding ? ( <>
<h2>Cargando productos....</h2>
<CombSpinner
color="black" font-size="900"
/>

</> ):
(
<>

<ItemList items={items}/>
</>


 )}

 </div>
)

}
export default ItemListContainer

