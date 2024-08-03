'use client'

import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import UserTable from './UserTable'
import AppointmentsList from './AppointmentsList'

export default function UserTableWrapper() {
  const [selectedUser, setSelectedUser] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const slots = useSelector(state => state.slot.slots)

  const filteredUsers = useMemo(() => {
    const userSet = slots.map(slot => slot.name)
    return userSet.filter(user => user.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [slots, searchTerm])

  const userAppointments = useMemo(() => {
    return slots.filter(slot => slot.name === selectedUser)
  }, [slots, selectedUser])

  const handleUserSelect = (userName) => {
    setSelectedUser(userName)
  }

  const handleSearchChange = (e) => {
    setSelectedUser(null)
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <UserTable
        filteredUsers={filteredUsers}
        onUserSelect={handleUserSelect}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      {selectedUser && (
        <AppointmentsList
          userAppointments={userAppointments}
          selectedUser={selectedUser}
        />
      )}
    </>
  )
}