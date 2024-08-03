'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { Button, Calendar } from 'antd'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function CalendarComponent() {

  const [isLoading, setIsLoading] = useState(true);

  useMemo(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const router = useRouter()
  const slots = useSelector(state => state.slot.slots)

  const slotsMap = slots.reduce((acc, slot) => {
    acc[slot.date] = slot.name
    return acc
  }, {})

  const cellRender = (date) => {
    const dateStr = date.format('YYYY-MM-DD')
    const userName = slotsMap[dateStr]

    return (
      <div className={`text-center text-sm ${userName ? 'bg-red-300 text-gray-600 h-full' : ''}`}>
        {userName ? `Booked by ${userName}` : ''}
      </div>
    )
  }

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="p-4 bg-blue-50 rounded shadow">
      <div className="flex items-center justify-between mb-4">
      <h1 className="text-xl font-semibold">All Booked Dates</h1>
      <Button type='primary' onClick={()=>router.push('/book-date')}>Book Date</Button>

      </div>
      <Calendar
        className='p-3'
        cellRender={cellRender}
      />
    </div>
  )
}