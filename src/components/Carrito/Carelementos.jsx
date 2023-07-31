import { useContext } from 'react'
import {dataContext} from "../Contex/ContextData"
import "./carele.css"
const Carelementos = () => {
  
    const {carr} = useContext(dataContext);

  return carr.map((e)=>{
    
    return(
        <>
              
                <div className='row m-1'>
                        <div className='col-2'>{e.cantidad}</div>
                        <div className='col-6 '>{e.title}</div>
                        <div className='col-3 '>{e.price}</div>

                </div>
    
        </>
     
    )
    })
}

export default Carelementos