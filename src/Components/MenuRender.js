import React ,{useState,useEffect}from 'react';
import Salad from './SaladComponent';
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


    var FullMenu =appState.menu.map(data =>{

        const filterData=data.items.filter(data =>{
            return data.name.toLowerCase().includes( search.toLowerCase())
        })

        return(
            <Salad menu={filterData} key={data.category}  setCart={setCart} cart={cart}/>
        )
    })


    return (
        <div className="p-4">
            <CarouselComp />
            <div className="container mt-5 " align="center">
              <input type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="saladCard container">
             {FullMenu}
            </div>
           
        </div>
    )
}

export default MenuRender;