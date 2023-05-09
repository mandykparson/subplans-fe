import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {

  return (
    <div>
        <Link 
            to="/"
            activeClassName="active-link"
            style={{ textDecoration: 'none' }}
            exact> 
                <h1>Subplans</h1>
        </Link>
    </div>
  )
}
