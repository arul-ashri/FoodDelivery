import React from 'react'
import { Card, CardTitle, CardBody, CardText, Button } from 'reactstrap';




const CartComponent = ({setCart,cart}) => {


    const RemoveCart = (Toremove) =>{
        setCart(
            cart.filter((data) => data !== Toremove)
        );
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

    const CartItem = ({ data }) => (
        <div className="row">
            <div className="mt-2 col">
                <Card>
                <CardBody>
                    <CardTitle tag="h3" className="row"><div  className="col-8">{data.name}</div> <div className="col">x {data.quantity} </div></CardTitle>
                    <div className="row"> 
                        <div className="col-7"> <CardText tag="h3">₹{data.price}</CardText> </div>
                        {data.quantity === 1 && <div className="col-5"> <Button  onClick={() =>RemoveCart(data)}> Remove</Button> </div>}
                        {data.quantity > 1 && <div className="col-5"> <Button  onClick={() =>Decrease(data)}> -</Button> <Button  onClick={() =>AddMore(data)}> +</Button></div>}
                    </div>
                   
                </CardBody>
                
                </Card>
                <hr className="my-2" />
            </div>
            <div className="mt-2 col-md-3">
                
            </div>
        </div>
            
    );

    var CartList = cart.map(data =>{
        return(
            <CartItem data={data} key={data.id} />

        );
    });

    var tot=0;
    var total = cart.map(data =>{
        tot= tot + (data.quantity*data.price);
        return tot;
    })
    console.log(total);

    const TotalRender = () => {
        return(
            <div className="container">
            <div className="row justify-content-center">
        <div className="col-8 col-offset">
            <Card >
                <CardBody align="center">
                    <CardTitle tag="h3">Total</CardTitle>
                    <h5> ₹ {tot}</h5>
                </CardBody>
            </Card>
        </div>
        </div>
        </div>

        )}

    return (
        <div className="container">
           <div>
            
           <h1 align="center">Cart ({cart.length})</h1>
                 <div>
                  {CartList}
                  <TotalRender />
                 </div>
            </div> 
        </div>
    )
}

export default CartComponent;
