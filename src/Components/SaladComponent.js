import { data } from 'flickity';
import React from 'react'
import { Card, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';


function Salad ({menu,setCart,cart}) { 

  

    const AddtoCart = (data) =>{
        setCart([...cart,data]);
    }

    const isInCart = (data) => {
        return !cart.find(item => item.id === data.id);
    }

    const AddMore = (data) =>{
        setCart(cart.map(
            (item) => {
                if (item.id === data.id){
                    item.quantity++;
                    return item;
                }
                return item;
            }
        ));
    }
    const Decrease = (data) =>{
        setCart(cart.map(
            (item) => {
                if (item.id === data.id){
                    item.quantity--;
                    return item;
                }
                return item;
            }
        ));
    }
    

   
    const SaladItem = ({ data }) => (
        <div className="row">
            <div className="mt-2 col-md-7">
                <Card>
                <CardBody>
                    <CardTitle tag="h3">{data.name}</CardTitle>
                   {/* <CardSubtitle>{data.desc}</CardSubtitle>*/}
                    <div className="row"> 
                        <div className="col-7"> <CardText tag="h3">₹{data.price}</CardText> </div>
                        { isInCart(data) && <div className="col-5"> <Button  onClick={() =>AddtoCart(data)}> Add to Cart</Button> </div>}
                        { !isInCart(data) && <div className="col-5"> <Button  onClick={() =>Decrease(data)}> -</Button> {data.quantity}  <Button  onClick={() =>AddMore(data)}> +</Button></div>}
                    </div>
                   
                </CardBody>
                
                </Card>
                <hr className="my-2" />
            </div>
            <div className="mt-2 col-md-3">
                
            </div>
        </div>
            
    );

    return(
        <div className="container mt-5 p-auto">
            {data.map(data => <SaladItem data={menu} key={menu.id} />)}
        </div>
    )
};


export default Salad;
