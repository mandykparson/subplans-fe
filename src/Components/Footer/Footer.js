import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <Link 
            to="/submit-plan"
            style={{ textDecoration: 'none' }}
            activeClassName="active-link"
            exact> 
                Contribute Your Own Subplan
        </Link>
    </div>
  )
}
