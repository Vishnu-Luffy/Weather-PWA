import React,{useState} from "react";
import {fetchWeather} from "./api/fetchWeather";
import "./App.css"
const App=()=>{
    const [query,setQuery]=useState("");
     const [weather,setWeather]=useState({});
    const search=async(e)=>{
        if(e.key=='Enter')
        {
            const data=await fetchWeather(query);
           setWeather(data);
           console.log(weather);
           setQuery('');
        }
    }
    return(
      <div className="main-container">
    
          <input type="text" className="search"  placeholder="search..." value={query} onChange={(e)=> setQuery(e.target.value)} onKeyUp={search}/> 
           {
           weather.main &&  (
                        <div className="city">
                         <h2 className="city-name">
                           <span>{weather.name}</span>
                           <sup>{weather.sys.country}</sup>
                         </h2>
                         <div className="city-temp">
                               {weather.main.temp}
                            <sup>&deg;C</sup>  
                            </div> 
                            <div calssName="info">
                                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                            <p>{weather.weather[0].description}</p>
                            </div>

                        </div> 
                        
                       
                         
           )} 
      </div>
    )

}
export default App;