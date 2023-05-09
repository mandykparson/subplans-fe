import React from 'react'
import { useState, useEffect } from 'react'
import OptionCards from '../Cards/OptionCards'

export default function Third() {
  const [ options, setOptions ] = useState([])
  const [ optionsURL ] = useState('http://localhost:3001/subplan_options/third')

  useEffect(() => {
    fetch(optionsURL)
      .then(res => res.json())
      .then(optionsAPI => setOptions(optionsAPI))
  }, [])

  return (
    <div>
        <p>third grade options</p>
        <OptionCards options={options} />
    </div>
  )
}
