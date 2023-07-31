import React from 'react'
import "./Card.css"

import { useContext } from 'react'
import { dataContext } from './Contex/ContextData';

function Card(props) {

  const {carr,setcarr} = useContext(dataContext);
  
        const comprar = (p) =>{
          
          const producto = carr.find( prod => prod.id === p.id );
          
          console.log("producto",producto)
            if(!producto){
              setcarr([...carr,{"id":p.id,"title":p.title,"cantidad":p.cantidad,"price":p.price}])
              console.log("Agregado al chango",p.id)
            }else{
              console.log("comprado anter")
              console.log(carr);
              let lon = carr.length;
              for(var i = 0; i<=lon-1;i++){
                
                if(carr[i].id == p.id){
                  carr[i].cantidad = carr[i].cantidad+1
                  // setcarr([...carr,carr[i].cantidad = carr[i].cantidad+1])
                 
                }else{

                }
              }
              
              
            }
            
            console.log("soy el arr",carr)

        
        
        
        }


  return (
    <>
        <div className="card" key={props.id} >
            <img src={props.img} alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.price}</p>
                {/* <Boton id ={props}/> */}
                <button className='btn btn-primary' onClick={()=>comprar(props)}>Comprar</button>
            </div>
        </div>
    
    
    </>
   


  )
}

export default Card