import React from 'react'
import './Benefits.css'

export default function Benefits() {
  return (
    <div className='benefits'>
        <h2>Benefits for Teachers</h2>
        <div className='row'>
          <div className='benefit-card'>
            <h3>Save Time and Reduce Stress</h3>
            <p>No need to spend hours creating lesson plans from scratch when a substitute teacher is needed. Have peace of mind that your students are still receiving quality instruction.</p>
          </div>
          <div className='benefit-card'>
            <h3>Confidence in Substitute Teachers</h3>
            <p>Provide a clear and organized plan for substitute teachers to follow that will ensure your students get the most out of their day at school.</p>
          </div>
        </div>
        <div className='row'>
          <div className='benefit-card'>
            <h3>Ensure Instruction Continuity</h3>
            <p>Ensure that your students' education is not hindered by your absence by having a substitute teacher follow your planned instruction.</p>
          </div>
          <div className='benefit-card'>
            <h3>Easy Acccess to Quality Plans</h3>
            <p>Access to a library of quality substitute teacher plans that are easy to use and can be customized to best suit your teaching style.</p>
          </div>
        </div>
    </div>
  )
}
