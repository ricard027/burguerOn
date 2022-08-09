import React from 'react';
import { useState } from 'react';
import Burguer from './Burguer';
import styles from '../styles/Main.css'

const Main = (props) => {
  const {Hamburguer, onAdd} = props;
  
  return (  
    <main>
       <ul>
         {Hamburguer.map(hamburguer =>

         (<Burguer key={hamburguer.id} Hamburguer={hamburguer} onAdd ={onAdd}/>))}
       </ul>
    </main>
  )
}

export default Main