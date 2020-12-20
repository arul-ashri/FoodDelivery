import React,{ useState } from 'react'
import { Card, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';


function Salad ({data}) {

    const [cart, setCart] = useState([]);

    function AddOn(data) {
  

        const AddtoCart = (data) =>{
           console.log({data});
            setCart([...cart,data]);
        }
       
        return (
            <div className="container">
        
                 <Button  onClick={() =>AddtoCart(data)}> Add To Cart</Button>
            </div>
        )
    }

    const SaladItem = ({ data }) => (
        <div className="row">
            <div className="mt-2 col-md-7">
                <Card>
                <CardBody>
                    <CardTitle tag="h3">{data.name}</CardTitle>
                    <CardSubtitle>{data.desc}</CardSubtitle>
                    <CardText tag="h5">₹{data.price}</CardText>
                </CardBody>
                </Card>
                <hr className="my-2" />
            </div>
            <div className="mt-2 col-md-3">
                <AddOn  data={data}/>
            </div>
        </div>
            
    );

    const CartComponent = () => (
        <div>
        <h1>Cart ({cart.length})</h1>
        <div>
            {cart.map((data,idx) => (
                <div className="mt-2 col-md-7" key={idx}>
                    <Card>
                    <CardBody>
                        <CardTitle tag="h3">{data.name}</CardTitle>
                        <CardSubtitle>{data.desc}</CardSubtitle>
                        <CardText tag="h5">₹{data.price}</CardText>
                    </CardBody>
                    </Card>
             </div>
            ))}
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
        <CartComponent/>
        </div>
    )
};


export default Salad;
