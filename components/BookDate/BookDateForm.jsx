'use client'

import React, { useState, useCallback, useRef } from 'react'
import { Calendar, Button, message } from 'antd'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { addSlot } from '../../redux/slotSlice'
import BookingForm from './BookingForm'
import { RollbackOutlined } from '@ant-design/icons'

export default function BookDateForm() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [submitError, setSubmitError] = useState(null)

  const dispatch = useDispatch()
  const slots = useSelector(state => state.slot.slots)
  const router = useRouter()

  const formikRef = useRef(null)

  const handleDateSelect = useCallback((date) => {
    const selectedDate = date.format('YYYY-MM-DD');
    const today = dayjs().format('YYYY-MM-DD');
    if (selectedDate < today) {
      return;
    }
    setSelectedDate(selectedDate);
    setIsModalVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    if (formikRef.current) {
      formikRef.current.resetForm()
    }
    setIsModalVisible(false)
    setSubmitError(null)
  }, [])

  const slotExists = (date) => {
    return slots.some(slot => slot.date === date)
  }

  const handleFormSubmit = useCallback(
    (values) => {
      if (!selectedDate) {
        return
      }
      const newSlot = { ...values, date: selectedDate }
      if (slotExists(newSlot.date)) {
        setSubmitError('A slot already exists for this date.')
        message.error('A slot already exists for this date.')
      } else {
        dispatch(addSlot(newSlot))
        setIsModalVisible(false)
        message.success('Booking successful!')
        router.push('/')
      }
    },
    [selectedDate, router, dispatch]
  )

  const disablePastDates = (current) => {
    const today = dayjs().startOf('day')
    return current.isBefore(today, 'day')
  }

  return (
    <>
      <div className="flex items-center justify-end mb-4">
        <Button type="primary" ghost onClick={() => router.push('/')}>Back <RollbackOutlined /></Button>
      </div>
      <Calendar
        onSelect={handleDateSelect}
        disabledDate={disablePastDates}
      />
      <BookingForm
        ModalVisible={isModalVisible}
        onSubmit={handleFormSubmit}
        onCancel={handleCancel}
        submitError={submitError}
        formikRef={formikRef}
        resetCallback={handleCancel}
      />
    </>
  )
}