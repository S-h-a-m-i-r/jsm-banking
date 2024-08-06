'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount:number}) => {
    console.log("renderer from animated counter")
  return (
    <div className='w-full'>
      <CountUp 
        end={amount}
        decimal=','
        prefix='$'
        duration={0.75}
      />
    </div>
  )
}

export default AnimatedCounter
