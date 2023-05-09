import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='row'>
        <div className='nav-bar'>
            <div>
                <Link 
                    to="/first"
                    activeClassName="active-link"
                    style={{ textDecoration: 'none', color: 'white' }}
                    exact> 
                        First
                </Link>
            </div>
            <div>
                <Link 
                    to="/second"
                    activeClassName="active-link"
                    style={{ textDecoration: 'none', color: 'white' }}
                    exact> 
                        Second
                </Link>
            </div>
            <div>
                <Link 
                    to="/third"
                    activeClassName="active-link"
                    style={{ textDecoration: 'none', color: 'white' }}
                    exact> 
                        Third
                </Link>
            </div>
            <div>
                <Link 
                    to="/forth"
                    activeClassName="active-link"
                    style={{ textDecoration: 'none', color: 'white' }}
                    exact> 
                        Forth
                </Link>
            </div>
            <div>
                <Link 
                    to="/fifth"
                    activeClassName="active-link"
                    style={{ textDecoration: 'none', color: 'white' }}
                    exact> 
                        Fifth
                </Link>
            </div>
        </div>
    </div>
  )
}
