import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody,} from 'reactstrap';

export const LandingPage = () => {
    return (
        <div className="container p-3" align="center" style={{backgroundColor: "white",minHeight: "100vh"}}>
            <div style={{
                fontSize: 50,
                color: "rgb(213,216,217)",
                fontFamily: "Georgia, serif",
                fontWeight: 15

            }} align="center" className="col-10" >What are you looking today</div>,
            <div className="col-10 m-3">
                <Card className="saladCard " align="center" style={{backgroundColor: "rgb(255,204,1)",minHeight:"30vh"}}>
                    <CardBody >
                    <div><span className="fa fa-coffee fa-lg m-3"></span></div>
                        <h1 className="m-2">Get Some Food Items</h1>
                        <Link to="/home" ><span className="fa fa-chevron-circle-right fa-lg m-2" aria-hidden="true"></span></Link>
                    </CardBody>
                </Card>
            </div>
            <div  className="col-10 m-3" >
                <Card className="saladCard" align="center" style={{minHeight:"30vh"}}>
                    <CardBody>
                        <div><span className="fa fa-shower fa-lg m-3"></span></div>
                        <h1 className="m-2">Get Some Utilities</h1>
                        <Link to="/utility" ><span className="fa fa-chevron-circle-right fa-lg m-2 " aria-hidden="true"></span></Link>
                    </CardBody>
                </Card>
            </div>    
        </div>
    )
}
