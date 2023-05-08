import React, { useState } from 'react'

export default function OptionCard(props) {

    const [ optionURL ] = useState(props.option.link)

    const handleRedirect = () => {
        window.location.href = optionURL ;
    };

  return (
    <div className='option-card'>
        <h4>{props.option.title}</h4>
        <p>{props.option.overview}</p>
        <button onClick={handleRedirect}>Select</button>
    </div>
  )
}
