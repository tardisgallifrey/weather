import { useState } from 'react';
import { WeatherGet } from './weatherget';


export function InputZip() {
    const [zip, setZip] = useState("");
    const [showComponent, setShow] =useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setShow(true);
      
    }
  
    return (
      <div>
          <form onSubmit={handleSubmit}>
            <label>Enter a US zip code:
              <input 
                type="text" 
                placeholder="Type zip code here"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </label>
            <input type="submit" />
            </form>
            <div>
              {showComponent ? <WeatherGet zip={zip} /> : null}
            </div>  
      </div>
    )
  }