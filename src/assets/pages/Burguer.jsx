import React from 'react'
import styles from '../styles/Burguer.css';
import imagem from '../img/Produto.jpg';


function Burguer(props) {
  const {Hamburguer, onAdd} = props;
 
  return ( 
    <li className='burguer'>
   
     <img src={imagem}alt={Hamburguer.name}  className='img'/>
     <h3>{Hamburguer.name}</h3>
     <p className='description'>descriçao</p>
     <p>R$: {Hamburguer.price}</p>

     <button onClick={()=> onAdd(Hamburguer)}>add</button>
    </li>
  )
}

export default Burguer