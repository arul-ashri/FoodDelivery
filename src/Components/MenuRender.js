import React ,{useState,useEffect}from 'react';
import Salad from './SaladComponent';
import SaladData from '../Shared/SaladData';
import PizzaData from '../Shared/PizzaData';
import CarouselComp from './CarouselComp';


const MenuRender = ({setCart,cart}) => {

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

    const [search, setSearch] = useState('');


    const filterSalad = SaladData.filter(data =>{
        return data.name.toLowerCase().includes( search.toLowerCase())
    })
    const filterPizza = PizzaData.filter(data =>{
         return data.name.toLowerCase().includes( search.toLowerCase())
    })

    var FullMenu =appState.menu.map(data =>{
        return(
            <Salad menu={data.items} key={data.category} />
        )
    })

    console.log({appState});

    return (
        <div>
            <CarouselComp />
            <div className="container mt-5" align="center">
              <input type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)}/>
            </div>
            {FullMenu}
        </div>
    )
}

export default MenuRender;