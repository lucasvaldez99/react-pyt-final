import { BiCartAlt } from "react-icons/bi";
import { useCartContext } from "../../context/CardContext";
import  estilos from'./nav.module.css'
import { Link } from "react-router-dom";
  export  const CardWidjet = () =>{
    const {totalProducts} = useCartContext()
    return(
      <div className={estilos.connt}>
      <>
    <Link to='/cart'>
    
    <span className={estilos.icono}><BiCartAlt/>{totalProducts() || ''}</span>
    </Link>
    </>
    </div>
    )

}