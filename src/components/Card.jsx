import React from 'react'
import "./Card.css"
import Boton from './Boton'
function Card(props) {
  return (
    <>
        <div className="card" key={props.ele} >
            <img src={props.img} alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <Boton id ={props}/>
            </div>
        </div>
    
    
    </>
   


  )
}

export default Card