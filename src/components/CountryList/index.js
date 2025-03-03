import React from "react"
import StateList from "../StateList"
import "./index.css"

const CountryList = ({countries, onEdit, onDelete}) =>{
    return(
        <div className="country-container">
            <h1 className="country">Countries</h1>
            <ul className="list">
                {countries.map(country =>(
                    <li key={country.id} className="country-name">   
                        {country.name}
                        <div>
                        <button className="edit" onClick={() =>{
                            const newName = prompt("Enter new name for country:", country.name);
                            if(newName && newName !== country.name){
                                onEdit(country.id, newName)
                            }
                        }}>Edit</button>
                        <button className="delete" onClick={() => onDelete(country.id)}>
                            Delete
                        </button>
                        </div>
                        <StateList country={country}/>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default CountryList;