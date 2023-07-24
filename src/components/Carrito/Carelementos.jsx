import { useContext } from 'react'
import {dataContext} from "../Contex/ContextData"

const Carelementos = () => {
  
    const {carr} = useContext(dataContext);

  return carr.map((e)=>{
    return(
        
        <div className="card" key={e.id} >
            <img src={e.img} alt="" />
            <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">{e.description}</p>
                
            </div>
        </div>
    
    
    )
    })
}

export default Carelementos