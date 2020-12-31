import React from 'react'
import { Card, CardTitle, CardBody, CardText, Button } from 'reactstrap';


function Salad ({menu,setCart,cart}) { 

  

    const AddtoCart = (data) =>{
        data.quantity=1;
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

    const RemoveCart = (Toremove) =>{
        setCart(
            cart.filter((data) => data !== Toremove)
        );
    }
    

   
    const SaladItem = ({ data }) => (
        <div className="row justify-content-center">
            <div className="mt-2 col-9">
                <Card className="saladItem">
                <CardBody>
                    <CardTitle tag="h3">{data.name}</CardTitle>
                   {/* <CardSubtitle>{data.desc}</CardSubtitle>*/}
                    <div className="row"> 
                        <div className="col-6"> <CardText tag="h3">₹{data.price}</CardText> </div>
                        <div className="col-5">
                            { isInCart(data) &&  <div  ><Button color="danger" style={{fontSize: 10, fontWeight: 'bold', height: 35,width:110}} onClick={() =>AddtoCart(data)}>ADD TO CART</Button> </div>}

                            { !isInCart(data) && data.quantity !== 0 && 
                                <div style={{height:35}}>
                                    <div className="row " >
                                        <Button  color="danger" className=" col-3 ml-2" style={{height:35,width:36}} onClick={() =>Decrease(data)}> -</Button> 
                                        <h4 align="center" className="p-1 col-3" style={{height:35,width:36,color:'white',border: '1px rgb(221,52,68) solid',borderRadius: 5,}}>{data.quantity} </h4>
                                        <Button color="danger" className="col-3" style={{height:35,width:36}} onClick={() =>AddMore(data)}> +</Button>
                                    </div>
                                </div>}

                            { !isInCart(data) && data.quantity === 0 && <div> <Button  color="danger" style={{fontSize: 10, fontWeight: 'bold',width:110,height:35}} onClick={() =>RemoveCart(data)}> REMOVE</Button></div>}
                        </div>
                    </div>
                   
                </CardBody>
                
                </Card>
                <hr className="my-2" />
            </div>
        </div>
            
    );

    return(
        <div className="container mt-5 p-auto">
            {menu.map(data => <SaladItem data={data} key={data.id} />)}
        </div>
    )
};


export default Salad;
