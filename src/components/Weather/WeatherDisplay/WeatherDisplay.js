import React from 'react';
// Assets
import W01dIcon from '../../../assests/01d.png'
import W01nIcon from '../../../assests/01n.png'
import W02dIcon from '../../../assests/02d.png'
import W02nIcon from '../../../assests/02n.png'
import W03dIcon from '../../../assests/03d.png'
import W03nIcon from '../../../assests/03n.png'
import W04dIcon from '../../../assests/04d.png'
import W04nIcon from '../../../assests/04n.png'
import W09dIcon from '../../../assests/09d.png'
import W09nIcon from '../../../assests/09n.png'
import W10dIcon from '../../../assests/10d.png'
import W10nIcon from '../../../assests/10n.png'
import W11dIcon from '../../../assests/11d.png'
import W11nIcon from '../../../assests/11n.png'
import W13dIcon from '../../../assests/13d.png'
import W13nIcon from '../../../assests/13n.png'
import W50dIcon from '../../../assests/50d.png'
import W50nIcon from '../../../assests/50n.png'

const weatherDisplay=(props)=>{
  let display=null;
  let temp=props.temp
  switch(props.weathericon){
      case('01d'):
        display =<img alt="weather-icon"src={W10dIcon}/>;
        break;
      case('01n'):
        display = <img alt="weather-icon"src={W01nIcon}/>;
        break;
      case('02d'):
        display = <img alt="weather-icon"src={W02dIcon}/>;
        break;
      case('02n'):
        display = <img alt="weather-icon"src={W02nIcon}/>;
        break;
      case('03d'):
        display = <img alt="weather-icon"src={W03dIcon}/>;
        break;
      case('03n'):
        display = <img alt="weather-icon"src={W03nIcon}/>;
        break;
      case('04d'):
        display = <img alt="weather-icon"src={W04dIcon}/>;
        break;
      case('04n'):
        display = <img alt="weather-icon"src={W04nIcon}/>;
        break;
      case('09d'):
        display = <img alt="weather-icon"src={W09dIcon}/>;
        break;
      case('09n'):
        display = <img alt="weather-icon"src={W09nIcon}/>;
        break;
      case('10d'):
        display = <img alt="weather-icon"src={W10dIcon}/>;
        break;
      case('10n'):
        display = <img alt="weather-icon"src={W10nIcon}/>;
        break;
      case('11d'):
        display = <img alt="weather-icon"src={W11dIcon}/>;
        break;
      case('11n'):
        display = <img alt="weather-icon"src={W11nIcon}/>;
        break;
      case('13d'):
        display = <img alt="weather-icon"src={W13dIcon}/>;
        break;
      case('13n'):
        display = <img alt="weather-icon"src={W13nIcon}/>;
        break;
      case('50d'):
        display = <img alt="weather-icon"src={W50dIcon}/>;
        break;
      case('50n'):
        display = <img alt="weather-icon"src={W50nIcon}/>;
        break;
      default:
        display=<div>Please Submit a Date for the Weather</div>;
    }

  return (
    <div className="WeatherDisplay">
      <div className="WeatherDescription">{props.weatherdescription}</div>
      <div >{display}</div>
      <div className="WeatherTemperature">{temp} &#8451; </div>
    </div>
  );
}

export default weatherDisplay;
