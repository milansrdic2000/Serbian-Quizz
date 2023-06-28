import React, { useState } from 'react'

interface TimerProps {
  time: number
}
const Timer = ({ time }: TimerProps) => {
  return (
    <div className='timer-container'>
      <div className='timer-wrapper'>
        <span>{time}</span>
      </div>
    </div>
  )
}

export default Timer
