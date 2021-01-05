import React ,{useState,useEffect}from 'react';
import {Link} from "react-router-dom";
import { Card, CardTitle, CardBody, CardText, Button } from 'reactstrap';
import { Input } from 'reactstrap';




const CartComponent = ({setCart,cart}) => {
    
    const [place, setPlace] = useState(false)

    
    console.log({place})

    const [order, setOrder] = useState({
        name: "",
        table: "",
        list: [],
      });

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        const apiUrl = `https://debug.kyukey.tech/api/dining/new_order/`;
        fetch(apiUrl, requestOptions)
             .then((res) => res.json())
             .then(data => {
                 setOrder({name:"joe",table: "4c930b1f-f733-46c6-ba74-6bde6105b8d3", list: {cart},})
             });
    },[setOrder,cart]);

    console.log({order});

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
        <div className="row justify-content-center">
            <div className="mt-2 col-9">
                <Card className="saladItem">
                <CardBody>
                    <CardTitle tag="h3" className="row"><div  className="col-8">{data.name}</div> <div className="col">x {data.quantity} </div></CardTitle>
                    <div className="row"> 
                        <div className="col-7"> <CardText tag="h3">₹{data.price}</CardText> </div>
                        {data.quantity === 1 && <div className="col-5"> <Button color="danger"  onClick={() =>RemoveCart(data)}> Remove</Button> </div>}
                        {data.quantity > 1 && <div className="col-5"> <Button className="mr-2" color="danger" onClick={() =>Decrease(data)}> -</Button> 
                        <Button color="danger"  onClick={() =>AddMore(data)}> +</Button></div>}
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
            <div  > 
             <CartItem data={data} key={data.id} />
            </div>

        );
    });

    var tot=0;
    var total = cart.map(data =>{
        tot= tot + (data.quantity*data.price);
        return tot;
    })


    const TotalRender = () => {
        return(
            <div className="container">
            <div className="row justify-content-center">
        <div className="col-8 col-offset">
            <Card className="saladItem">
                <CardBody align="center">
                    <CardTitle tag="h3">Total</CardTitle>
                    <h5> ₹ {tot}</h5>
                </CardBody>
            </Card>
        </div>
        </div>
        </div>

        )}
    
        const CartRender = () =>{
         if(!place){
            return(
                <div>
                    <div className="saladCard mt-5 pb-5"> 
                        <h1 align="center">Cart ({cart.length})</h1>
                        <div className="container">
                            {CartList}
                        </div>
                        <div>
                            <TotalRender />
                        </div>
                    </div>
                    <div align="center">
                       <Button color="primary" onClick={() =>setPlace(true)}>PROCEDD</Button>
                    </div>
                </div> 
            )}
            return(<div></div>)

        }

        const NameRender = () =>{
            if(place){
                return(
                    <div>
                        <div className="saladCard mt-5 pb-5">
                            <h3 align="center">Enter Your Name</h3>
                            <Input placeholder="your name.." />
                        </div>
                        <div align="center">
                          <Button color="danger" onClick={() =>setPlace(false)}>Cancel</Button>
                          <Button color="success" onClick={() =>setPlace(false)}>Place Order</Button>
                        </div>
                    </div>
                )
            }
            return(<div></div>)
        }
       

      
    return (
        <div className="container cart">
            <div className="float row" align="center">
                    <Link className="ml-3" to="/"><h5>.<span className="fa fa-home fa-lg my-float " aria-hidden="true"></span></h5></Link>
            </div>
            <div className="container">
               <CartRender />
               <NameRender />
            </div>
            
        </div>
    
    )
}

export default CartComponent;
