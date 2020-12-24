import React from 'react'
import { Card, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';


function Salad ({data,setCart,cart}) { 

  

    const AddtoCart = (data) =>{
        setCart([...cart,data]);
    }
    

   
    const SaladItem = ({ data }) => (
        <div className="row">
            <div className="mt-2 col-md-7">
                <Card>
                <CardBody>
                    <CardTitle tag="h3">{data.name}</CardTitle>
                    <CardSubtitle>{data.desc}</CardSubtitle>
                    <div className="row"> 
                        <div className="col-7"> <CardText tag="h3">₹{data.price}</CardText> </div>
                        <div className="col-5"> <Button  onClick={() =>AddtoCart(data)}> Add To Cart</Button> </div>
                    </div>
                   
                </CardBody>
                
                </Card>
                <hr className="my-2" />
            </div>
            <div className="mt-2 col-md-3">
                
            </div>
        </div>
            
    );


    var SaladList = data.map(data =>{
        return(
            <SaladItem data={data} key={data.id} />

        );
    });

    return(
        <div className="container mt-5 p-auto">
        <h1>Salad</h1>
        {SaladList}
        </div>
    )
};


export default Salad;
