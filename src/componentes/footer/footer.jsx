import React from 'react';
import estilo from './footer.module.css'



const Footer = ()=>{
    return(
        <footer>
            <ul className={estilo.ulse}>
                <li className={estilo.lii}>
                    <a href="http://" className={estilo.link}>watssap</a>
                </li>
                <li className={estilo.lii}>
                    <a href="http://facebok.com" className={estilo.link}>facebook</a>
                </li>
                <li className={estilo.lii}>
                    <a href="http://" className={estilo.link}>instagram</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;