import React, { useState } from 'react';
import CityList from '../CityList';
import "./index.css"

const StateList = ({ country }) => {
  const [states, setStates] = useState(country.states);

  const addState = () => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      setStates([...states, { id: Date.now(), name: stateName, cities: [] }]);
    }
  };

  const editState = (id, newName) => {
    const updatedStates = states.map(state =>
      state.id === id ? { ...state, name: newName } : state
    );
    setStates(updatedStates);
  };

  const deleteState = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this state?");
    if (confirmed) {
      setStates(states.filter(state => state.id !== id));
    }
  };

  return (
    <div className='state-container'>
      <h1 className='state-name'>States of {country.name}</h1>
      <button className='add-button' onClick={addState}>Add State</button>
      <ul className="state-list">
        {states.map(state => (
          <li key={state.id}>
            {state.name}
            <div className='button'>
            <button className='edit' onClick={() => {
              const newName = prompt("Enter new name for state:", state.name);
              if (newName && newName !== state.name) {
                editState(state.id, newName);
              }
            }}>Edit</button>
            <button className='delete' onClick={() => deleteState(state.id)}>Delete</button>
            </div>
            <CityList state={state} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateList;
