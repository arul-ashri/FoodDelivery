import React,{ useState } from 'react'
import {Button} from 'reactstrap';




function AddOn(data) {
    const [cart, setCart] = useState([]);

    const AddtoCart = (data) =>{
       console.log('we cart');
        setCart([...cart,data]);
    }
   
    return (
        <div className="container">
    
             <Button  onClick={() =>AddtoCart(data)}> Add To Cart ({cart.length})</Button>
        </div>
    )
}


export default AddOn;
