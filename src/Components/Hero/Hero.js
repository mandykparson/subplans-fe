import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {

  return (
    <div className='hero'>
        <Link 
            to="/"
            activeClassName="active-link"
            style={{ textDecoration: 'none', color: '#0B241A'}}
            exact> 
                <h1>Subplan Helper</h1>
        </Link>
    </div>
  )
}
