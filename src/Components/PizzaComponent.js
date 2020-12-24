import React from 'react'
import SaladItem from './SaladComponent'

function Pizza  ({data})  {
    const PizzaList = data.map(data =>{
        return(
            <SaladItem data={data} key={data.id} />

        );
    });
    return (
        <div>
           <PizzaList />
        </div>
    )
}

export default Pizza;