import React ,{useState,useEffect}from 'react';
import NavbarComponent from './Components/NavbarComponent';
import './App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import MenuRender from './Components/MenuRender';
import CartComponent from './Components/Cart';
import imgbg from './bgfood.jpg';
import { LandingPage } from './Components/LandingPage';



const App = () => {

  const [appSt, setAppSt] = useState({
    loading: false,
    menu: [],
  });

  const [appState, setAppState] = useState({
    loading: false,
    menu: [],
  });

  useEffect(() => {
    setAppState({ loading: true, menu: [] });
    const apiUrl = `https://debug.kyukey.tech/api/dining/menu/`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((menu) => {
        setAppState({ loading: false, menu: menu});
      });
  }, [setAppState]);

  useEffect(() => {
    setAppSt({ loading: true, menu: [] });
    const apiUrl = `https://debug.kyukey.tech/api/hotel/room_service/menu/?type=utility`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((menu) => {
        setAppSt({ loading: false, menu: menu});
      });
  }, [setAppSt]);


 

  const [cart, setCart] = useState([]);
  return (
    <Router>
        <div className="App" style={{backgroundImage: `url(${imgbg})`,  backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',width: '100vw',minHeight: '100vh'}}>
        
         
          <Switch>
            <Route exact path ="/"><LandingPage /> </Route>
            <Route  path ="/home"> <NavbarComponent numb={cart.length} /><MenuRender  setCart={setCart}  cart={cart} data={appState} setData={setAppState} />  </Route>
            <Route  path ="/utility"> <NavbarComponent numb={cart.length} /><MenuRender  setCart={setCart}  cart={cart} data={appSt} setData={setAppSt}/> </Route>
            <Route path="/cart"><NavbarComponent numb={cart.length} /> <CartComponent  cart={cart} setCart={setCart}/> </Route>
          </Switch> 
        
      </div>
    </Router>
  )
}

export default App;


