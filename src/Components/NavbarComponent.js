import React from 'react';
import { Navbar, NavbarBrand, Nav,  NavItem,Jumbotron  } from 'reactstrap';
const NavbarComponent = () => {
    return (
        <div>
            <Navbar fixed='top' dark color="primary">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logonew.png" height="35" width="45" alt="Ristorance Con Fusion" />
                    </NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <a className="nav-link" href="/menu"> 
                                <span className="fa fa-bars"></span> Menu
                            </a>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="row">
                            <a className="nav-link" href="/menu"> 
                                <span className="fa fa-shopping-cart fa-lg " aria-hidden="true"></span> 
                            </a>
                            1
                      </NavItem>
                    </Nav>
                </div>
            </Navbar>
            <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6" align="center">
                        <img src="assets/images/write.png" height="200" width="250" alt="Ristorance Con Fusion" />
                        <hr className="my-2" />
                        <p>We take inspiration from the world's best cuisine. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                    <div className="col-12 col-sm-6" align="center">
                    <img src="assets/images/logonew.png" height="200" width="220" alt="Ristorance Con Fusion" />
                    </div>
                </div>
            </div>
        </Jumbotron>

        </div>
    )
}

export default NavbarComponent;

