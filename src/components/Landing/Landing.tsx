import React from 'react'
import './Landing.scss'
import { Link } from 'react-router-dom'

const Landing: React.FC = () => {
  return (
    <>
      <Link to="main">
        <button className="land-btn">Start App</button>
      </Link>
    </>
  )
}

export default Landing
