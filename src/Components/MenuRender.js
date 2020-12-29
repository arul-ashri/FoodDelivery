import React ,{useState,useEffect}from 'react';
import Salad from './SaladComponent';
import SaladData from '../Shared/SaladData';
import PizzaData from '../Shared/PizzaData';
import CarouselComp from './CarouselComp';


const MenuRender = ({setCart,cart}) => {

    const [appState, setAppState] = useState({
        loading: false,
        menu: null,
      });

      useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://debug.kyukey.tech/api/dining/menu/`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((menu) => {
            setAppState({ loading: false, menu: menu});
          });
      }, [setAppState]);

    const [search, setSearch] = useState('');


    const filterSalad = SaladData.filter(data =>{
        return data.name.toLowerCase().includes( search.toLowerCase())
    })
    const filterPizza = PizzaData.filter(data =>{
         return data.name.toLowerCase().includes( search.toLowerCase())
    })


    return (
        <div>
            <CarouselComp />
            <div className="container mt-5" align="center">
              <input type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <Salad data={filterSalad} setCart={setCart} cart={cart} name="Salad"/>
        </div>
    )
}

export default MenuRender;