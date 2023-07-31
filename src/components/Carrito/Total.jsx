
import { useContext } from 'react'
import {dataContext} from "../Contex/ContextData"
import "./carele.css"
function Total () {
    const {carr,total,settotal} = useContext(dataContext);
    let sum = 0;

    const sumar = () => {
        
            return carr.map((e)=>{

                        sum = sum +(e.price*e.cantidad)
                        settotal(sum)
                        console.log("soy total",total)
                        console.log(e.price*e.cantidad)
                        console.log("soy sum ",sum)
                        })
                                      
    }
          
       
        
    sumar()

    return(
        <>
              
                <div className='row m-1'>
                        <div className='col-8 '><h2>Total</h2></div>
                        <div className='col-3 ' id='suma'>{sum}</div>
                        

                </div>
    
        </>
     
    )
}



export default Total