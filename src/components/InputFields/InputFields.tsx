import React, { useContext, useState } from 'react';
import { store } from "../../App";
import './InputField.scss';
import Refresh from '../../resources/images/refresh.png';

const InputFields = ( { searchCity, setSearchCity, updatedCity, setUpdatedCity} ) => {

  const [ newCity, setNewCity ] = useState<string>('');
  
  const changeCity = (e) => {
    console.log(e.target.value);
    setNewCity(e.target.value);
  }

  const updateCity = (e) => {
    e.preventDefault();
    setUpdatedCity(newCity);
    setNewCity('');
  }

  return (
    <form className='input-container' onSubmit={updateCity}>
      
      <input
        type='text'
        id='input'
        className='input-field'
        placeholder='Your City'
        value = {newCity}
        onChange={changeCity}
      />    
      <img
        src={Refresh}
        alt="Refresh"
        className="refresh-icon"
      />
    </form>



  )
}

export default InputFields
