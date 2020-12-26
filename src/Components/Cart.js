import React from 'react'
import { Card, CardTitle, CardBody, CardText, Button ,CardSubtitle} from 'reactstrap';




const CartComponent = ({setCart,cart}) => {


    const RemoveCart = (Toremove) =>{
        setCart(
            cart.filter((data) => data !== Toremove)
        );
    }

    const CartItem = ({ data }) => (
        <div className="row">
            <div className="mt-2 col-md-7">
                <Card>
                <CardBody>
                    <CardTitle tag="h3">{data.name}</CardTitle>
                    <CardSubtitle>{data.desc}</CardSubtitle>
                    <div className="row"> 
                        <div className="col-7"> <CardText tag="h3">₹{data.price}</CardText> </div>
                        <div className="col-5"> <Button  onClick={() =>RemoveCart(data)}> Remove</Button> </div>
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

    return (
        <div className="container">
           <div>
            
           <h1 align="center">Cart ({cart.length})</h1>
                 <div>
                  {CartList}
                 </div>
            </div> 
        </div>
    )
}

export default CartComponent;
