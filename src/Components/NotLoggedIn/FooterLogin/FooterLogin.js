import React from 'react'
import './FooterLogin.css'

export default function FooterLogin({ setLogin }) {
  return (
    <div className='footer-login'>
      <div className='footer-login-content'>
        <h2>Try it out now and start saving time!</h2>
        <button onClick={() => setLogin(true)}>Get Started</button>
      </div>
    </div>
  )
}
