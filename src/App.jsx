import './App.css'
//import PropTypes from 'prop-types'

import chief from './images/chief.jpg'


function Header({name, year}) {
  console.log(name, year);
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

console.log(dishObjects);

function Main({dishes}){
  return (
    <>
      <div>
        <h2>Welcome to this nice restaurant!</h2>
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
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()}/>
      <Main dishes={dishObjects} />
    </div>
  )
}

export default App
