import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Trending = () => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    obtenerTrend();
  }, []);
  const obtenerTrend = async () => {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=zmLuDmcyl7BtoUqLELEUUK0REECmZUEU&q=trending&limit=25&offset=0&rating=g&lang=en"
    );
    const data = await response.json();
    setTrend(data.data);
    console.log(data);
  };
  return (
    <div>
      <h1 className="titulo">Trending</h1>
      <div>
      {trend.map((e) => (
        <div className="gifs-tren">
          <Link to={`/${e.id}`}>
            <p className="titulo-gif ">{e.title} </p>
          </Link>
          <div className="contenedor-img">
          <img src={e.images.downsized_medium.url} key={e.id} />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Trending;
