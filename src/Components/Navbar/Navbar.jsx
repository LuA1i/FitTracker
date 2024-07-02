import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h1>
            <Link to={'/'} className="logo-link">
              Fit<span>Tracker</span>
            </Link>
          </h1>
        </div>

        <ul>
          <li>
            <Link className="nav-links" to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to={'/CalorieTracker'}>
              CalorieTracker
            </Link>
          </li>
          <li>
            <Link className="nav-links" to={'/bmiCalculator'}>
              BMI
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
