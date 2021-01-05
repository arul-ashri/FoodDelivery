import React from 'react';
import {Jumbotron } from 'reactstrap';
const NavbarComponent = ({numb}) => {
    return (
        <div className="container">
        <div className="container">
            
            </div>
            <div className="container pt-4">
            <Jumbotron  className="container saladCard">
                <div >
                    <div className=" row" >
                        <div  className="col" align= "center" >
                            <img src="assets/images/write.png" height="75%" width="50%" alt="Ristorance Con Fusion" />
                            <img src="assets/images/logonew.png" height="75%" width="50%" alt="Ristorance Con Fusion" />
                         </div>
                         <hr className="my-2" />
                    </div>
                    <div className="row mt-0 mb-0 App">
                        <div className="col justify-content-around" align="center" >
                                ORDER THE FOOD YOU LOVE🧡
                        </div>
                        <div className="col" align="center">
                            TABLE-21
                        </div>
                    </div>
                </div>
             </Jumbotron>
             </div>

        </div>
    )
}

export default NavbarComponent;

