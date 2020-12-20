import React from 'react';
import AddOn from './AddOn';
import { Card, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';



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

function Salad ({data}) {
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
