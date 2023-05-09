import React from 'react'
import { useState, useEffect } from 'react'
import OptionCards from '../Cards/OptionCards'

export default function Second() {

  const [ options, setOptions ] = useState([])
  const [ optionsURL ] = useState('http://localhost:3001/subplan_options/second')

  useEffect(() => {
    fetch(optionsURL)
      .then(res => res.json())
      .then(optionsAPI => setOptions(optionsAPI))
  }, [])

  return (
    <div>
        <OptionCards options={options} />
    </div>
  )
}
