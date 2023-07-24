import React,{useState, useEffect, useContext} from 'react';
import { dataContext } from './Contex/ContextData';
import Card from './Card';


let array = [];
export function Prod() {

    const {productos} = useContext(dataContext); //Traigo la informacion de la api
   
    array = productos;
    const lisProd = productos.map((p)=>{
      return <Card img={p.image} title={p.title} 
      description={p.price} ele={p.id}/>
      })
      console.log(array)
    return (
      <div className='container' >{lisProd}</div>
    )
  
}



