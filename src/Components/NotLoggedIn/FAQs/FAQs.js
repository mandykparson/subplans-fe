import React from 'react'
import './FAQs.css'

export default function FAQs() {
  return (
    <div className='faqs'>
      <div className='header'>
        <h2>Frequently Asked Questions</h2>
        <p>Got Questions? We've got answers. Check out our FAQs below:</p>
      </div>
        <div className='questions-box'>
          <div className='question'>
            <h3>How frequently are new plans added?</h3>
            <p>We make updates to our plans at the beginning of each school year.</p>
          </div>
          <div className='question'>
            <h3>Are the plans customizable?</h3>
            <p>Yes! All our plans are customizable.</p>
          </div>
          <div className='question'>
            <h3>Can I share the plans I purchased?</h3>
            <p>Absolutely! However you will be the only one who can customize them.</p>
          </div>
        </div>
    </div>
  )
}
