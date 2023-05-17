
import React, { useState, useEffect,useContext } from 'react';
// import {ReactComponent as ArrowLeft } from '../../assets/SVG/arrow_left.svg'
import { ReactComponent as Cloud } from '../../assets/SVG/cloud.svg';
import { ReactComponent as Humidity } from '../../assets/SVG/humidity.svg';
import { ReactComponent as CloudDay } from '../../assets/SVG/cloudy-day.svg';
import { ReactComponent as CloudNight } from '../../assets/SVG/cloudy-night.svg';
import { ReactComponent as ArrowLeft } from '../../assets/SVG/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../assets/SVG/arrow_right.svg';
import { ReactComponent as Lightning } from '../../assets/SVG/lightning.svg';
import { ReactComponent as MapPin } from '../../assets/SVG/map-pin.svg';
import { ReactComponent as Mist } from '../../assets/SVG/mist.svg';
import { ReactComponent as Moon } from '../../assets/SVG/moon.svg';
import { ReactComponent as Rainy } from '../../assets/SVG/rainy.svg';
import { ReactComponent as Snow } from '../../assets/SVG/snow.svg';
import { ReactComponent as Sun } from '../../assets/SVG/sun.svg';
import { ReactComponent as Thermo } from '../../assets/SVG/thermo.svg';
import { ReactComponent as Wind } from '../../assets/SVG/wind.svg';
import { store } from '../../App';


import './WeatherBottom.scss';
import sampleHourly from '../../utils/keys/sampleHourly';

const weatherApiKey = import.meta.env.VITE_API_KEY;

const WeatherBottom = () => {
  const [weatherData, setWeatherData] = useState(sampleHourly);
  const [counter, setCounter] = useState(1);
  const [ state, dispatch ] = useContext(store);

  const fetchWeatherData = async (city : string) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=current,minutely,hourly,alerts&appid=${weatherApiKey}&units=metric`);
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${weatherApiKey}`);
      // const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?q=${city}&lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${weatherApiKey}&units=metric}`);
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}}&units=metric`);
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchWeatherData(state.city);
    // fetchWeatherData('Delhi');
    // console.log(weatherData);
    // fetchWeatherData('New York');
  }, [state.city])
  const icons = {
    '01d': <Sun />,
    '01n': <Moon />,
    '02d': <CloudDay />,
    '02n': <CloudNight />,
    '03d': <Cloud />,
    '03n': <Cloud />,
    '04d': <Cloud />,
    '04n': <Cloud />,
    '09d': <Rainy />,
    '09n': <Rainy />,
    '10d': <Rainy />,
    '10n': <Rainy />,
    '11d': <Lightning />,
    '11n': <Lightning />,
    '13d': <Snow />,
    '13n': <Snow />,
    '50d': <Mist />,
    '50n': <Mist />,
  };
  const day = [
    { day: 'Sunday', time: '10:00', tempHigh: '18', tempLow: '15', icon: '01d' },
    { day: 'Monday', time: '10:00', tempHigh: '18', tempLow: '15', icon: '01d' },
    { day: 'Tuesday', time: '10:00', tempHigh: '18', tempLow: '15', icon: '01d' },
    { day: 'Wednesday', time: '10:00', tempHigh: '18', tempLow: '15', icon: '01d' },
    { day: 'Thursday', time: '10:00', tempHigh: '18', tempLow: '15', icon: '01d' },
    { day: 'Friday', time: '10:00', tempHigh: '18', tempLow: '15', icon: '01d' },
    { day: 'Saturday', time: '10:00', tempHigh: '18', tempLow: '15', icon: '01d' },
    { day: 'Sunday', time: '10:00', tempHigh: '18', tempLow: '15', icon: '01d' },
  ];

  const hourly = [
    { time: '12:00 am', tempHigh: '18', tempLow: '15', icon: '01d' },
    { time: '1:00 am', tempHigh: '18', tempLow: '15', icon: '01d' },
    { time: '2:00 am', tempHigh: '18', tempLow: '15', icon: '01d' },
    { time: '3:00 am', tempHigh: '18', tempLow: '15', icon: '01d' },
    { time: '4:00 am', tempHigh: '18', tempLow: '15', icon: '01d' },
    { time: '5:00 am', tempHigh: '18', tempLow: '15', icon: '01d' },
    { time: '6:00 am', tempHigh: '18', tempLow: '15', icon: '01d' },
    { time: '7:00 am', tempHigh: '18', tempLow: '15', icon: '01d' },
  ];

  const currrentTime = (t : any) => {
    // const time = t;
    const dateString = t;
    const time = dateString.slice(11, 16);
    const [hour, minute] = time.split(":");
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour > 12 ? hour - 12 : hour;
    const time12 = `${hour12}:${minute} ${period}`;
    // console.log(time12); // Output: "9:00 PM"
    return time12;
  }

  const plusOne = () => {

    if (counter === 3) return;

    setCounter((prev) => (prev + 1));
    console.log(counter);

  }
  const minusOne = () => {

    if (counter === 1) return;

    setCounter((prev) => (prev - 1));
    console.log(counter);

  }


  return (
    <div className='forecast'>
      <div className='change-forecast'>
        {/* <div className='daily-btn forecast-selected'>Daily</div> */}
        <div className='hourly-btn forecast-selected'>Hourly</div>
        <div className='change-hours'>
          <div className='change-hours__left' onClick={minusOne} >
            <ArrowLeft />
          </div>
          {/* {console.log(weatherData)} */}
          <div className={`dot dot1 ${counter === 1 && 'dot-selected'}`}  data-dot="1"></div>
          <div className={`dot dot2 ${counter === 2 && 'dot-selected'}`} data-dot="2"></div>
          <div className={`dot dot3 ${counter === 3 && 'dot-selected'}`} data-dot="3"></div>

          <div className='change-hours__right' onClick={plusOne} >
            <ArrowRight />
          </div>
        </div>
      </div>

      {/* <div className='forecast-daily-container'>
        {day.map((item, index) => (
          <div className='forecast-daily' key={index} id={`current-day-plus-${index + 1}`}>
            <div className='forecast-daily__day'>{item.day}</div>
            <div className='forecast-daily__temperature'>
              <div className='forecast-daily__temperature-high'>{item.tempHigh}°</div>
              <div className='forecast-daily__temperature-low'>{item.tempLow}°</div>
            </div>
            <div className='forecast-daily__icon'>
            {icons[item.icon]}
            </div>
          </div>
          
        ))}
    </div> */}
      {counter === 1 &&

        <div className='forecast-hourly-container'>
          {weatherData.list.length > 5 && weatherData.list.slice(0, 5).map((item, index) => (
            <div className='forecast-hourly' key={index} id={`current-hour-plus-${index + 1}`}>
              {/* {console.log(currrentTime(item.dt_txt))} */}
              <div className='forecast-hourly__time'>{currrentTime(item.dt_txt)}</div>
              <div className='forecast-hourly__temperature'>
                <div className='forecast-hourly__temperature-high'>{item.main.temp_max}°C</div>
                {/* <div className='forecast-hourly__temperature-low'>{item.main.temp_min}°C</div> */}
              </div>
              <div className='forecast-hourly__icon'>
                {icons[item.weather[0].icon]}
              </div>
            </div>
          ))}
        </div>
      }
      {counter === 2 &&

        <div className='forecast-hourly-container'>
          {weatherData.list.length > 5 && weatherData.list.slice(6, 11).map((item, index) => (
            <div className='forecast-hourly' key={index} id={`current-hour-plus-${index + 1}`}>
              {/* {console.log(currrentTime(item.dt_txt))} */}
              <div className='forecast-hourly__time'>{currrentTime(item.dt_txt)}</div>
              <div className='forecast-hourly__temperature'>
                <div className='forecast-hourly__temperature-high'>{item.main.temp_max}°C</div>
                {/* <div className='forecast-hourly__temperature-low'>{item.main.temp_min}°C</div> */}
              </div>
              <div className='forecast-hourly__icon'>
                {icons[item.weather[0].icon]}
              </div>
            </div>
          ))}
        </div>
      }
      {counter === 3 &&

        <div className='forecast-hourly-container'>
          {weatherData.list.length > 5 && weatherData.list.slice(12, 17).map((item, index) => (
            <div className='forecast-hourly' key={index} id={`current-hour-plus-${index + 1}`}>
              {/* {console.log(currrentTime(item.dt_txt))} */}
              <div className='forecast-hourly__time'>{currrentTime(item.dt_txt)}</div>
              <div className='forecast-hourly__temperature'>
                <div className='forecast-hourly__temperature-high'>{item.main.temp_max}°C</div>
                {/* <div className='forecast-hourly__temperature-low'>{item.main.temp_min}°C</div> */}
              </div>
              <div className='forecast-hourly__icon'>
                {icons[item.weather[0].icon]}
              </div>
            </div>
          ))}
        </div>
      }
    </div >
  )
}

export default WeatherBottom