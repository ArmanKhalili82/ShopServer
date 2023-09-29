import React, {useState} from 'react'
import './Header.css'
import Navbar from './Navbar'


const Header = () => {
const [users, setUsers] = useState([]);

const [name, setName] = useState("");

const handleClick = async () => {
  const response = await fetch("http://localhost:5145/WeatherForecast")
  const data = await response.json();
  setUsers(data)
}

const handleSave = async () => {
  const update = await fetch("http://localhost:5145/WeatherForecast")
}

  return (
    <div>
        <Navbar />
        <header className='container-fluid header'>
            <div className='text-light text-center banner'>
                <h1 className='display-4 top-header'>Welcome To Shop</h1>
                <p className='lead top-discription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text this is cool</p>
                <button onClick={handleClick}>Server Side</button>
                <div className='dataserver'>
                {users.map((user) => {
                  return (
                    <h1>{user.date} - {user.temperatureC} - {user.temperatureF} - {user.summary} - {user.city} </h1>
                  )
                  })}
                </div>
                <input type='text' onChange={e => setName().target.value } />
                <button onClick={handleSave}>Save</button>
            </div>
        </header>
    </div>
  )
}

export default Header