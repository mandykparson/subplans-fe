import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <div className='nav-bar'>
            <div>
                <Link 
                    to="/first"
                    activeClassName="active-link"
                    // onClick={() => closeMenu()}
                    exact> 
                        First
                </Link>
            </div>
            <div>
                <Link 
                    to="/second"
                    activeClassName="active-link"
                    // onClick={() => closeMenu()}
                    exact> 
                        Second
                </Link>
            </div>
            <div>
                <Link 
                    to="/third"
                    activeClassName="active-link"
                    // onClick={() => closeMenu()}
                    exact> 
                        Third
                </Link>
            </div>
            <div>
                <Link 
                    to="/forth"
                    activeClassName="active-link"
                    // onClick={() => closeMenu()}
                    exact> 
                        Forth
                </Link>
            </div>
            <div>
                <Link 
                    to="/fifth"
                    activeClassName="active-link"
                    // onClick={() => closeMenu()}
                    exact> 
                        Fifth
                </Link>
            </div>
        </div>
    </div>
  )
}
