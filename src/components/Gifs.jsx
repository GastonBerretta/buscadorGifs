import React, { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";
const Gif = () => {
  const [gifs, setGifs] = useState([]);
  const [buscador,setBuscador] =  useState("")
  const busqueda = ()=>{
    obtenerDatos()
  }
   const obtenerDatos = async ()=> {
    const busqueda = buscador
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=zmLuDmcyl7BtoUqLELEUUK0REECmZUEU&q="+busqueda+"&limit=25&offset=0&rating=g&lang=en")
    const videos = await response.json()
    
    setGifs(videos.data)
    console.log(videos.data)
} 
 

  return (
    <div>
    <h1 className="titulo">Gif´s</h1>
    <form onSubmit={(e) => {
                    e.preventDefault();
                    busqueda();
                }}  >
      <input type="text" placeholder="Buscador" onChange={(e) => { setBuscador(e.target.value) }} />
      <button>Buscar</button>
    </form>
    <div className="contenedor-img">
    {
      gifs.length>0 ?
      ( gifs.map (e=>(
        <div className="gifs">
           <Link to={`/${e.id}`}>
           <p className="titulo-gif ">{e.title} </p>
           </Link>
        <div className="contenedor-img">
        <img className="img img-fluid" src={e.images.downsized_medium.url} key={e.id} />    
       
        </div>
        
        </div>
         ))):
     null
     
    }
    </div>
    </div>
  );
};

export default Gif;
