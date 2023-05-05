import React, { useState, useEffect, useContext } from 'react';
import './Weatherboard.scss';
import { store } from '../../App';
import sampleWeatherData from '../../utils/keys/sampleWeatherData';
import WeatherTopLeft from '../WeatherTopLeft/WeatherTopLeft';
import WeatherTopRight from '../WeatherTopRight/WeatherTopRight';
import WeatherBottom from '../WeatherBottom/WeatherBottom';


const weatherApiKey = import.meta.env.VITE_API_KEY;


const Weatherboard = ({ updatedCity,setUpdatedCity, errorSearch,setErrorSearch }) => {
  const [ newCity, setNewCity ] = useState('');
  const [ weatherData, setWeatherData ] = useState(sampleWeatherData);
  const [ state, dispatch ] = useContext(store);

  const fetchWeatherData = async (city) => {
    try {
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=current,minutely,hourly,alerts&appid=${weatherApiKey}&units=metric`);
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${weatherApiKey}`);
      // const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?q=${city}&lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${weatherApiKey}&units=metric}`);
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}}&units=metric`);
      
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);
  
      if (!response.ok) {
        setErrorSearch(true);
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setWeatherData(data);
      setErrorSearch(false);

    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    fetchWeatherData(updatedCity);
    // fetchWeatherData('Delhi');
    // console.log(weatherData);
    // fetchWeatherData('New York');
  }, [updatedCity])
  useEffect(() => {
    const weatherApp = document.getElementById("weather-app");
    if (state.weatherWindow.weatherStretch && weatherApp) {
      weatherApp.style.height = "calc(100vw - 29px - 2.5em)";
    }else{
      weatherApp.style.height = "calc(40vw - 2.5em)";

    }
  }, [state.weatherWindow.weatherStretch]);

  return (
    <div className='weather-app' id="weather-app">
      <div className='top'>
    
          <WeatherTopLeft 
            className="left" 
            weatherData={weatherData} 
            newCity={newCity} 
            setNewCity={setNewCity}
            updatedCity ={updatedCity}
            setUpdatedCity={setUpdatedCity}
            errorSearch={errorSearch}
          />
          <WeatherTopRight 
            className="right" 
            weatherData={weatherData}
            updatedCity ={updatedCity}
            setUpdatedCity={setUpdatedCity} 
          />
      </div>
      <div className='bottom'>
        {/* {console.log(updatedCity)} */}
        {/* {console.log(weatherData)} */}
      <WeatherBottom 
        updatedCity={updatedCity}
        setUpdatedCity={setUpdatedCity}
      />
      </div>
    </div>
  )

}
export default Weatherboard