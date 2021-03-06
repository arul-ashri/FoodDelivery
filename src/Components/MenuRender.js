import React ,{useState,useEffect}from 'react';
import Salad from './SaladComponent';
import CarouselComp from './CarouselComp';
import {Link} from "react-router-dom";
import { InputGroup, InputGroupText, Input } from 'reactstrap';


const MenuRender = ({setCart,cart,data,setData}) => {

    
    const [search, setSearch] = useState('');


    var FullMenu =data.menu.map(data => {

        const filterData=data.items.filter(data =>{
            return data.name.toLowerCase().includes( search.toLowerCase())
        })
        if(filterData.length!==0){
        return(
          
             <Salad menu={filterData} key={data.category} name={data.category} setCart={setCart} cart={cart}/>
        )}
        return(
          <div></div>
        )
    })


    return (
        <div className="p-4">
        <div className="float row pt-1" align="center">
            <Link className="ml-3" to="/cart"><span style={{color: 'rgb(221,52,68)'}} className="fa fa-shopping-cart fa-lg my-float " aria-hidden="true"></span></Link>
            <h5 style={{color: 'black'}}>{cart.length}</h5>
        </div>
            <CarouselComp data={data.menu} />
            <div className="container mt-5 " align="center">
            <InputGroup className="m-2 mb-4 saladCard">
              <InputGroupText><span className="fa fa-search"></span></InputGroupText>
              <Input type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)}/>
            </InputGroup>
            </div>
            <div className="saladCard container">
             {FullMenu}
            </div>
           
        </div>
    )
}

export default MenuRender;