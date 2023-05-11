import React from 'react'
import Benefits from './Benefits/Benefits'
import FAQs from './FAQs/FAQs'
import FooterLogin from './FooterLogin/FooterLogin'
import HowItWorks from './HowItWorks/HowItWorks'
import './NotLoggedIn.css'
import SubHeroLogin from './SubHeroLogin/SubHeroLogin.js'

export default function NotLoggedIn({ setLogin }) {
  return (
    <div className="not-logged-in">
      <SubHeroLogin setLogin={setLogin}/>
      <HowItWorks />
      <Benefits />
      <FAQs />
      <FooterLogin />
    </div>
  )
}
