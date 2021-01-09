import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Card, CardTitle, CardBody, CardText, Button } from 'reactstrap';
import { Input } from 'reactstrap';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';





const CartComponent = ({ setCart, cart }) => {

    const [place, setPlace] = useState(false);
    const [name, setName] = useState("");
    const [pdfDis, setPdfDis] = useState(false);



    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ title: 'React POST Request Example' })
    //     };
    //     const apiUrl = `https://debug.kyukey.tech/api/dining/new_order/`;
    //     fetch(apiUrl, requestOptions)
    //          .then((res) => res.json())
    //          .then(data => {
    //              setOrder({name: {name} ,table: "4c930b1f-f733-46c6-ba74-6bde6105b8d3", list: {cart},})
    //          });
    // },[]);


    const RemoveCart = (Toremove) => {
        setCart(
            cart.filter((data) => data !== Toremove)
        );
    }


    const Decrease = (data) => {
        setCart(cart.map(
            (item) => {
                if (item.id === data.id) {
                    item.quantity--;
                    return item;
                }
                return item;
            }
        ));
    }

    const AddMore = (data) => {
        setCart(cart.map(
            (item) => {
                if (item.id === data.id) {
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
                        <CardTitle tag="h3" className="row"><div className="col-8">{data.name}</div> <div className="col">x {data.quantity} </div></CardTitle>
                      {!pdfDis && (  <div className="row">
                            <div className="col-7"> <CardText tag="h3">₹{data.price}</CardText> </div>
                            {data.quantity === 1 && <div className="col-5"> <Button color="danger" onClick={() => RemoveCart(data)}> Remove</Button> </div>}
                            {data.quantity > 1 && <div className="col-5"> <Button className="mr-2" color="danger" onClick={() => Decrease(data)}> -</Button>
                                <Button color="danger" onClick={() => AddMore(data)}> +</Button></div>}
                        </div>)}

                    </CardBody>
 
                </Card>
                <hr className="my-2" />
            </div>
            <div className="mt-2 col-md-3">

            </div>
        </div>

    );

    var CartList = cart.map(data => {
        return (
            <div  >
                <CartItem data={data} key={data.id} />
            </div>

        );
    });

    var tot = 0;
    var total = cart.map(data => {
        tot = tot + (data.quantity * data.price);
        return tot;
    })


    const TotalRender = () => {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 col-offset">
                        <Card className="saladItem">
                            <div>
                                <CardBody className="row"> 
                                   <div className="col-5 offset-sm-2 align-self-center mr-0"><CardTitle tag="h3">Total - </CardTitle></div> 
                                   <div className="col-5  align-self-center"><h5 > ₹ {tot}</h5></div> 
                                </CardBody>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        )
    }

    const CartRender = () => {
      
            return (
                <div className="pb-3">
                    <div className="saladCard mt-5 pb-2">
                       {!pdfDis && ( <h1 align="center">Cart ({cart.length})</h1>)}
                       {pdfDis && ( <h2 align="center" className="m-1">ORDER SUMMARY</h2>)}
                        <div className="container">
                            {CartList}
                        </div>
                        <div>
                            <TotalRender />
                        </div>
                        <div className="mt-4 mb-2">
                            <div align="center">
                                {!pdfDis &&  ( <Button color="danger" onClick={() => setPlace(true)}>PROCEED</Button>)}
                                {pdfDis && ( <Button color="primary" onClick={() => pdfDownload()}>Download</Button>)}
                            </div>
                        </div>
                    </div>
                    
                </div>
            )
    

    }
    const PlaceOrder = () => {
        setPdfDis(true);
        var items = cart.map((e) => { return { menuitem: e.id, quantity: e.quantity } });
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ table: '4c930b1f-f733-46c6-ba74-6bde6105b8d3', items: items, customer_name: name })
        };
        const apiUrl = `https://debug.kyukey.tech/api/dining/new_order/`;
        fetch(apiUrl, requestOptions)
            .then((res) => null)
            .catch((err) => alert('Error'));

        
    }



    // const NameRender = () =>{
    //     if(place){
    //         return(
    //             <div key="input_name" >
    //                 <div className="saladCard mt-5 pb-5">
    //                     <h3 align="center">Enter Your Name</h3>
    //                     <Input placeholder="your name.." value={name} onChange={e => setName(e.target.value)} />
    //                 </div>
    //                 <div align="center">
    //                   <Button color="danger" onClick={() =>setPlace(false)}>Cancel</Button>
    //                   <Button color="success" onClick={() =>PlaceOrder()}>Place Order</Button>
    //                 </div>
    //             </div>
    //         )
    //     }
    //     return(<div></div>)
    // }


    function pdfDownload() {
        var bod = document.body;
        var HTML_Width = bod.clientWidth;
        var HTML_Height = bod.clientHeight;
        var top_left_margin = 0;
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;

        html2canvas(bod).then(function (canvas) {
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF('p', 'pt', [canvas_image_width, canvas_image_height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            pdf.save("order_summary.pdf");
        });
    }



    return (
        <div className="container cart">
            <div className="float row" align="center">
                <Link className="ml-3" to="/home"><h5>.<span style={{color: 'rgb(221,52,68)'}} className="fa fa-home fa-lg my-float " aria-hidden="true"></span></h5></Link>
            </div>
            <div className="container">
                {!place && (<CartRender />)}
                {/* <NameRender /> */}
                {place && !pdfDis && (

                    <div key="input_name"  className="pb-5">
                        <div className="saladCard mt-5">
                            <h3 align="center">Enter Your Name</h3>
                            <div className="pl-3 pr-3">
                                 <Input placeholder="your name.." value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="mt-2 mb-2">
                                  <div align="center">
                                    <Button className="m-3" color="danger" onClick={() => setPlace(false)}>Cancel</Button>
                                    <Button color="success" onClick={() => PlaceOrder()}>Place Order</Button>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                )}
                {pdfDis && (
                    <div>
                    <CartRender />
                    </div>
                 
                   
                )}
            </div>

        </div>

    )
}

export default CartComponent;
