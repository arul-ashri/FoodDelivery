import React from 'react';
import Salad from './SaladComponent';
import SaladData from '../Shared/SaladData';
import PizzaData from '../Shared/PizzaData';
import CarouselComp from './CarouselComp';


const MenuRender = (setCart,cart) => {

    return (
        <div>
            <CarouselComp />
            <Salad data={SaladData} setCart={setCart} cart={cart} />
            <Salad data={PizzaData} setCart={setCart} cart={cart} />
        </div>
    )
}

export default MenuRender;