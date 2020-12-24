import React from 'react'
import Flickity from 'react-flickity-component'
import { Card, CardTitle, CardBody, CardImg,} from 'reactstrap';


function CarouselComp () {
    return (
        <div className="container pt-2" align="center" >
         <Flickity  >
                <div className="m-2 col-8" >
                <Card  >
                    <CardImg src="./assets/images/appetizers.jpg" height="180"  width="130" alt="ff" />
                    <CardTitle tag="h4">Appetizers</CardTitle>
                </Card>
            </div>
            <div className="m-2 col-8">
                <Card  >
                    <CardImg src="./assets/images/hot_beverages.jpg" height="180"  width="30" alt="ff" />
                    <CardTitle tag="h4">Hot Beverages</CardTitle>
                </Card>
            </div>
            <div className="m-2 col-8">
                <Card  >
                    <CardImg src="./assets/images/soft_beverages.jpg" height="180"  width="30" alt="ff" />
                    <CardTitle tag="h4">Mint Mojito</CardTitle>
                </Card>
            </div>
            <div className="m-2 col-8">
                <Card  >
                    <CardImg src="./assets/images/Burger.jpg" height="180"  width="30" alt="ff" />
                    <CardTitle tag="h4">Burgerzz</CardTitle>
                </Card>
            </div>
            <div className="m-2 col-8">
                <Card className="bg1" >
                    <CardImg src="./assets/images/soft_beverages.jpg" height="180"  width="30" alt="ff" />
                    <CardTitle tag="h4">Mint Mojito</CardTitle>
                </Card>
            </div>
            
  
         
        </Flickity>
            
        </div>
    )
}

export default CarouselComp;
