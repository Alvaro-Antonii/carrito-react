
import { useContext } from 'react'
import { dataContext } from './Contex/ContextData';
function Boton(props) {

  const {carr,setcarr} = useContext(dataContext);
   const comprar = (p) =>{
    console.log("Compradoo",p)
    setcarr([...carr,p])
    console.log(carr)
   }


  return (
    <button className='btn btn-primary' onClick={()=>comprar(props)}>Comprar</button>
  )
}

export default Boton