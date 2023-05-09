import React from 'react'
import { useState, useEffect } from 'react'
import OptionCards from './OptionCards'

export default function Fifth() {

  const [ options, setOptions ] = useState([])
  const [ optionsURL ] = useState('http://localhost:3001/subplan_options/fifth')

  useEffect(() => {
    fetch(optionsURL)
      .then(res => res.json())
      .then(optionsAPI => setOptions(optionsAPI))
  }, [])

  return (
    <div>
        <p>fifth grade options</p>
        <OptionCards options={options} />
    </div>
  )
}
