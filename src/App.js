import React ,{useState}from 'react';
import NavbarComponent from './Components/NavbarComponent';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import MenuRender from './Components/MenuRender';
import CartComponent from './Components/Cart';
import imgbg from './saladbg3.jpg';



const App = () => {

  const [cart, setCart] = useState([]);
  return (
    <Router>
      <div className="App" style={{backgroundImage: `url(${imgbg})`,width: "100%",}}>
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


