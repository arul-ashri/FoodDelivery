import React from 'react';
import { Navbar, NavbarBrand, Nav,  NavItem,Jumbotron  } from 'reactstrap';
import { Link} from "react-router-dom";
const NavbarComponent = ({numb}) => {
    return (
        <div>
            <Navbar fixed='top' dark >
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                       <Link to="/"> <img src="assets/images/logonew.png" height="30"  alt="Ristorance Con Fusion" /></Link>
                    </NavbarBrand>
                   
                    <Nav className="ml-auto" navbar>
                        <NavItem className="row">
                            <a className="nav-link" href="/menu"> 
                               <Link to="/cart"><span className="fa fa-shopping-cart fa-lg " aria-hidden="true"></span> </Link>
                            </a>
                            {numb}
                      </NavItem>
                    </Nav>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container" >
                    <div className=" row" >
                        <div  className="col" align= "center" >
                            <img src="assets/images/write.png" height="75%" width="50%" alt="Ristorance Con Fusion" />
                            <img src="assets/images/logonew.png" height="75%" width="50%" alt="Ristorance Con Fusion" />
                         </div>
                         <hr className="my-2" />
                    </div>
                    <div className="row mt-0 mb-0">
                        <div className="col justify-content-around" align="center" style={{color:'black'}}>
                                ORDER THE FOOD YOU LOVE💙
                        </div>
                        <div className="col" align="center" style={{color:'black'}}>
                            TABLE-21
                        </div>
                    </div>
                </div>
             </Jumbotron>

        </div>
    )
}

export default NavbarComponent;

