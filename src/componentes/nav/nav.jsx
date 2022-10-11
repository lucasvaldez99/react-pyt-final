import React from 'react';
import { CardWidjet } from './CardWidjet';
import  estilos from'./nav.module.css'
import { Link } from 'react-router-dom';

const Nav = () =>{
    return( 
        <header>
            <nav className={estilos.nav}>
                
                <ul>
                <div className={estilos.logo}>
                 <p>Mundo <b className={estilos.masco}>REPUESTO</b></p>
                 </div>
                
                        <Link to="/categorias/motos110">Motos 110</Link>
                    
                
                        <Link to="/categorias/motos150">Motos 125/150</Link>
                    
                
                        <Link to="/categorias/bicis">Bicis</Link>
                    
                
                        <Link to="/">Inicio</Link>
                    
                <Link to="/contador"><CardWidjet/></Link>
                    
                   
                </ul>
              
            </nav>
        </header>
    )
}

export default Nav;