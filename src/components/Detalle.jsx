import React,{useEffect,useState} from 'react'

import { useParams } from 'react-router-dom';

const Detalle = () => {
    
    const {id} = useParams()
    const [detalle,setDetalle] = useState([])

    useEffect(()=>{
        objetenDatos();
    },[])
    
    const objetenDatos = async ()=> {
        const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=zmLuDmcyl7BtoUqLELEUUK0REECmZUEU`)
        const data = await response.json()
        setDetalle(data.data)
    }
    return ( 
        <div>

            {
                
                detalle.length!=0 ?(
                    <div className="gifs-tren">
                    <p className="titulo-gif ">{detalle.title} </p>
                    <div className="contenedor-img">
                    <img src={detalle.images.downsized_medium.url} key={detalle.id} />
                    </div>
                    </div>
                ):(
                    null
                )
                
            }
            
          
          
         
        
      
        </div>
    );
}
 
export default Detalle;