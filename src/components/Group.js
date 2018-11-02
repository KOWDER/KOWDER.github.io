import React from 'react'
import '../styles/Group.css';

export default ({ name, countries, onClick }) => {
  return (
    <div className={`group-container group${name}`}>
      <div className='group-name'>
        <h3>{name}</h3>
      </div>
      {
        countries.map((country, i) => {
          return (
            <div key={i} className="country-container">
              <input 
                type="checkbox" 
                value={country} 
                name="country"
                id={country}
                onClick={onClick} />
              <label 
                htmlFor={country} 
              >
                {country}
              </label>
            </div>
          )
        })
      }
    </div>
  )
}
