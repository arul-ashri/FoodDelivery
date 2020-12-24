import React ,{ useState}from 'react';
import NavbarComponent from './Components/NavbarComponent';
import './App.css';

import MenuRender from './Components/MenuRender';
import CartComponent from './Components/Cart';



const App = () => {

  const [cart, setCart] = useState([]);
  return (
    <div>
    <NavbarComponent />
    
    <MenuRender setCart={setCart} cart={cart} />
    <CartComponent  cart={cart} setCart={setCart}/>
    </div>
  )
}

export default App;


