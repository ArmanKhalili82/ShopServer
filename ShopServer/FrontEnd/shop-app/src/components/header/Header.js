import React, {useState} from 'react'
import './Header.css'
import Navbar from './Navbar'


const Header = () => {
const [users, setUsers] = useState([]);

const handleClick = async () => {
  const response = await fetch("http://localhost:5145/WeatherForecast")
  const data = await response.json();
  setUsers(data)
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
                    <li>{user.date}</li>,
                    <li>{user.temperatureC}</li>,
                    <li>{user.temperatureF}</li>,
                    <li>{user.summary}</li>
                  )
                  })}
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header