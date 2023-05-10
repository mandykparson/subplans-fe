import React from 'react'
import './SubHeroLogin.css'

export default function SubHeroLogin({ setLogin }) {
  return (
    <div className='sub-hero-login'>
        <div className='two-columns'>
            <div>
            <h2>Simplify Your Subplans</h2>
            <p>Because taking PTO shouldn't be stressful</p>
            </div>
            <div>
            <button onClick={() => setLogin(true)}>Get Started</button>
            </div>
        </div>
        <div className='two-columns'>
            {/* will include picture here later */}
        </div>
    </div>
  )
}
