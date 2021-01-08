import React from 'react'
import Flickity from 'react-flickity-component'
import { Card, CardTitle, CardImg,} from 'reactstrap';


function CarouselComp ({data}) {


    const CarouselItem = ({item}) =>{
       return (
            <div className="col-5">
                <div className="m-2 " >
                    <Card  className="saladItem">
                        <CardImg style={{borderRadius: 10}} src={item.image}  width="180" height="130"  alt={item.category} />
                        <CardTitle tag="h4">{item.category}</CardTitle>
                    </Card>
                </div>
            </div>
        )
    }
    return (
        <div className=" pt-2" align="center" >
        <div className="saladCard">
            <Flickity>
                {data.map(data => <CarouselItem item={data} key={data.id} />)}
            </Flickity>
        </div>
            
        </div>
    )
}

export default CarouselComp;

