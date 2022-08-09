import { useState } from 'react'
import './App.css';
import Main from './assets/pages/Main';
import Basket from './assets/pages/Basket';
import Header from './assets/pages/Header';
import  data from './assets/data/data.jsx';


function App() {
   const {Hamburguer} = data;
   const [cartItem, setCartItem] = useState([]);
   
   const onAdd = (product) => {
    const exist = cartItem.find((x)=> x.id === product.id)
    if(exist){
       setCartItem(cartItem.map(x => x.id === product.id?
        {...exist, qty: exist.qty + 1}: x
        
      ));
    }
    else{
      setCartItem([...cartItem , {...product, qty:1}])
    }
   }

   const onRemove = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header />
      <Main  onAdd = {onAdd} Hamburguer={Hamburguer}/>
      <Basket onRemove= {onRemove} onAdd ={onAdd} cartItem={cartItem}/>
    </div>
  )
}

export default App
