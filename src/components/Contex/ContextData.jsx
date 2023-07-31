import { createContext ,useState, useEffect } from "react";

export const dataContext = createContext();

const DataProvider = ({children}) =>{
    
    const [productos,setprod]  = useState([]);
    const [carr,setcarr] = useState([]);
    const [total,settotal] = useState(0);
    


    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((produc)=>setprod(produc))
        .catch((err)=>console.log(err))
        console.log(productos)
        
    },[]);

    return(
        <dataContext.Provider value={{productos, carr,setcarr,total,settotal}}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider;