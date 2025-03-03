import React, { useState } from 'react';
import './index.css'

const CityList = ({ state }) => {
  const [cities, setCities] = useState(state.cities);

  const addCity = () => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      setCities([...cities, { id: Date.now(), name: cityName }]);
    }
  };

  const deleteCity = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this city?");
    if (confirmed) {
      setCities(cities.filter(city => city.id !== id));
    }
  };

  return (
    <div className='city-container'>
      <h1 className='city-name'>Cities of {state.name}</h1>
      <button className='add-button' onClick={addCity}>Add City</button>
      <ul className='city-list'>
        {cities.map(city => (
          <li key={city.id}>
            {city.name}
            <div>
            <button className='delete' onClick={() => deleteCity(city.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
