import React ,{useState}from 'react';
import NavbarComponent from './Components/NavbarComponent';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import MenuRender from './Components/MenuRender';
import CartComponent from './Components/Cart';
import imgbg from './bgfood.jpg';



const App = () => {

  const [cart, setCart] = useState([]);
  return (
    <Router>
        <div className="App" style={{backgroundImage: `url(${imgbg})`,  backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',width: '100vw',minHeight: '100vh'}}>
        <NavbarComponent numb={cart.length} />
         
          <Switch>
            <Route exact path ="/"> <MenuRender  setCart={setCart}  cart={cart}/> </Route>
            <Route path="/cart"> <CartComponent  cart={cart} setCart={setCart}/> </Route>
          </Switch> 
        
      </div>
    </Router>
  )
}

export default App;


