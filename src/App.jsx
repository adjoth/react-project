import { useState, useReducer, useEffect } from 'react'
import './App.css'
//import PropTypes from 'prop-types'

import chief from './images/chief.jpg'


function Header({name, year}) {
  return (
      <header>
        <h1>Welcome {name}</h1>
        <p>Copyright {year}</p>
      </header>
    )
}

/*
Headers.prototype = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number
}
*/

const items = ["fish", "pizza", "salad"]

const dishObjects = items.map((item, index) => ({ id: index, title: item }));

//console.log(dishObjects);

function Main({dishes, openStatus, onStatus}){
  return (
    <>
      <div>
        <button onClick={() => onStatus(!openStatus)}>
          {openStatus ? "Close" : "Open"} Restaurant
        </button>
        <h2>Welcome to this nice restaurant! {openStatus ? "Open" : "Close"}</h2>
      </div>
      <main>
        <img src={chief} alt="chief"/>
          <ul>
          {dishes.map((dish) => (
            <li style={{ listStyleType: "none"}} key={dish.id}>{dish.title}</li>
          ))}
        </ul>
    </main>
    </>
  )
}

function App() {
  //const [status, setStatus ] = useState(true);
  const [status, toggle] = useReducer( 
    (status)=> !status, 
    true
  );

  useEffect(() => {
    console.log("The restaurant is now " + (status ? "open" : "closed"));
  }, [status])

  return (
    <div>
      <h1>The restaurant is currently {status ? "open" : "closed"}</h1>
      
      <button onClick={toggle}>Restaurant</button>
      <Header name="Alex" year={new Date().getFullYear()}/>
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
    </div>
  )
}

export default App
