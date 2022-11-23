import { useState, useEffect } from 'react';
import * as Constants from '../shared/constants';
import { RefreshPage } from './refreshpage';

//This is your basic API setup for GET.
//This is your basic API setup for GET.

const URL = "https://weatherapi-com.p.rapidapi.com/current.json?q=";



export const WeatherGet = (props) => {
  const [data, setData] = useState(null);
  
  useEffect( () => {

    //useEffect callbacks can only be synchronous.
    //We most definitely want asynchronous, therefore,
    //we have to actually write an async function
    //inside our useEffect

    //You MUST define the fetching function here
    const fetchData = async () => {
      const response = await fetch(URL + props.zip, Constants.options)
      const newData = await response.json();
      setData(newData);
      console.log(newData);
    };

    //and call it here
    fetchData();

    //We add an interval function so that
    //the user can watch the weather
    const interval = setInterval(() => {
      fetchData();
    }, 60000);
  
    //required for clearing the timer upon quitting.
    return () => clearInterval(interval);

//eslint-disable-next-line
  },[]);
  
  if(data){
    return(
      <div>
        <table>
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th></th>
            <th>Country</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{data.location.name}</td>
            <td>{data.location.region}</td>
            <td></td>
            <td>{data.location.country}</td>
          </tr>
          <tr>
            <td>Local Time: {data.location.localtime}</td>
            <td>{data.location.tz_id}:Time Zone</td>
          </tr>
          <tr className="firstline">
            <td>{data.current.condition.text}</td>
            <td>
              <img src={data.current.condition.icon} alt="condition"/>
            </td>
          </tr>
          <tr className="heading">
              <td>Current Temp:</td>
          </tr>
          <tr>
            <td>{data.current.temp_f}(F)</td>
            <td>{data.current.temp_c}(C)</td>
            <td></td>
          </tr>
          <tr>
            <td className="heading">Humidity:</td>
            <td>{data.current.humidity}</td>
          </tr>
          <tr>
            <td>Feels like:</td>
          </tr>
          <tr>
            <td>{data.current.feelslike_f}(F)</td>
            <td>{data.current.feelslike_c}(C)</td>
          </tr>
          <tr className="heading">
            <td>Pressure:</td>
          </tr>
          <tr>
            <td>{data.current.pressure_in} inches</td>
            <td>{data.current.pressure_mb} millibars</td>
          </tr>
          <tr className="heading">
            <td>Precipitation:</td>
          </tr>
          <tr>
            <td>{data.current.precip_in} inches</td>
            <td>{data.current.precip_mm} millimeters</td>
          </tr>
          <tr className="heading">
            <td>
              Winds:
            </td>
          </tr>
          <tr>
            <td>Wind from the </td>
            <td>{data.current.wind_dir + " (" + data.current.wind_degree + " deg)"}</td>
          </tr>
          <tr>
            <td>{data.current.wind_mph} mph</td>
            <td>{data.current.wind_kph} kph</td>
          </tr>
          <tr>
            <td>{data.current.gust_mph} gusts, mph</td>
            <td>{data.current.gust_kph} gusts, kph</td>
          </tr>
          <tr>
            <td><RefreshPage /></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }else{
    return null;
  }
   
 
}