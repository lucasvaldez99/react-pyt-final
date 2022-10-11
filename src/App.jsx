import './App.css';
import Nav from './componentes/nav/nav'

import Footer from './componentes/footer/footer';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';

import ItemDetailContainerm from './componentes/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './componentes/cart/cart';

import CartProvider from './context/CardContext';


const App = () => {

  const bienvenida = 'bienvenidos a nuestra pagina web'
 
 

  return (
   
    <BrowserRouter>
    
    
    <CartProvider>
    <Nav/>
     <Routes>
     
      <Route path="/" element={ <ItemListContainer bienvenida={bienvenida}/>}/>
      
      <Route path='/itemdetail/:idProd' element={<ItemDetailContainerm/>}/>
   
       <Route path='/categorias/:categoriasName'element={<ItemListContainer/>}/>

      <Route path='/cart' element={<Cart/>}/> 
    </Routes>

    </CartProvider>
    <Footer/>
    
    </BrowserRouter>
   
  )
}

export default App;