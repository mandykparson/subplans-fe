import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <div>
            <div>
                <Link 
                    to="/first"
                    activeClassName="active-link"
                    style={{ textDecoration: 'none' }}
                    exact> 
                        First
                </Link>
            </div>
            <div>
                <Link 
                    to="/second"
                    activeClassName="active-link"
                    style={{ textDecoration: 'none' }}
                    exact> 
                        Second
                </Link>
            </div>
            <div>
                <Link 
                    to="/third"
                    activeClassName="active-link"
                    style={{ textDecoration: 'none' }}
                    exact> 
                        Third
                </Link>
            </div>
            <div>
                <Link 
                    to="/forth"
                    activeClassName="active-link"
                    style={{ textDecoration: 'none' }}
                    exact> 
                        Forth
                </Link>
            </div>
            <div>
                <Link 
                    to="/fifth"
                    activeClassName="active-link"
                    style={{ textDecoration: 'none' }}
                    exact> 
                        Fifth
                </Link>
            </div>
        </div>
    </div>
  )
}
