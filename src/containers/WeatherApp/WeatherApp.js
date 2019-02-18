import React, { Component } from 'react';
import axios from 'axios';

import WeatherDisplay from '../../components/Weather/WeatherDisplay/WeatherDisplay';

class WeatherApp extends Component{
  state={
    temp:'',
    humidty:'',
    weatherdescription:'',
    weathericon:'',
    value:'',
  }

  componentDidMount(){
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Singapore,SGP';
    const apiId = '&APPID=c0d8800402471a765b95a874ff0807a0';
    const apiUrl=baseUrl+apiId

    const secondBaseUrl='http://api.openweathermap.org/data/2.5/forecast?q=Singapore,SGP'
    const secondUrl=secondBaseUrl+apiId

    axios.get(secondUrl)
      .then(res => {
      });
  }

  kelvinToDeg(kelvin){
    return ((parseFloat(kelvin)-273.15).toFixed(2)).toString()
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A date was submitted: ' + this.state.value);
    let date=this.state.value.toString();
    event.preventDefault();

    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Singapore,SGP';
    const apiId = '&APPID=c0d8800402471a765b95a874ff0807a0';
    const apiUrl=baseUrl+apiId;

    const secondBaseUrl='http://api.openweathermap.org/data/2.5/forecast?q=Singapore,SGP'
    const secondUrl=secondBaseUrl+apiId

    axios.get(secondUrl)
      .then(res => {

        var filteredRes = res["data"]["list"].filter(function (item) {
          return (item.dt_txt.includes(date));
        });
        if(filteredRes.length>3){
          this.setState({
              temp:this.kelvinToDeg(filteredRes[3]["main"]["temp"]),
              humidty:filteredRes[3]["main"]["humidity"],
              weatherdescription:filteredRes[3]["weather"][0]["description"],
              weathericon:filteredRes[3]["weather"][0]["icon"],
            })
        }
        else{
          alert("Pls select a date within 5 days of current date")
        }
      });
  }


  render(){
    return(
      <div className="WeatherApp">
        <WeatherDisplay weathericon={this.state.weathericon} weatherdescription={this.state.weatherdescription} temp={this.state.temp}/>

        <form className="WeatherInput" onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <input type="date" value={this.state.value} onChange={this.handleChange.bind(this)} />
          </label>
          <button type="submit" value="Submit" >Submit</button>
        </form>
      </div>

    );
  }
}
export default WeatherApp;
