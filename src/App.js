import React, {useState} from "react"
import CountryList from "./components/CountryList"
import "./App.css"

const App = () =>{
  const [countries, setCountries] = useState([]);

  const addCountry = (countryName) =>{
    setCountries([...countries, {id: Date.now(), name: countryName, states: []}]);
  };

  const editCountry = (id, newName) =>{
    const updatedCountries = countries.map(country =>
      country.id === id ? {...country, name: newName} : country
    );
    setCountries(updatedCountries);
  };

  const deleteCountry = (id) =>{
    const confirmed = window.confirm("Are you sure you want to delete this country?");
    if(confirmed){
      setCountries(countries.filter(country => country.id !== id));
    }
  };

  return(
    <div className="app-container">
      <h1 className="top-heading">Country, State, City Management</h1>
      <div>
      <button className="add-button" onClick={() => {
        const countryName = prompt("Enter country name:");
        if(countryName){
          addCountry(countryName);
        }
      }}>Add Country</button>
      </div>
      <CountryList countries={countries} onEdit={editCountry} onDelete={deleteCountry}/>
    </div>
  )
}

export default App;