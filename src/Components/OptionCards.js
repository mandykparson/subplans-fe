import React from 'react'
import OptionCard from './OptionCard'

export default function OptionCards(props) {

    const renderOptionCards = () => {
        return props.options.map(option => {
            return <OptionCard
                    key={option.id}
                    option={option}/>
        })
    }
  return (
    <div className='row'>
      <div className='option-cards'>{renderOptionCards()}</div>
    </div>
  )
}
