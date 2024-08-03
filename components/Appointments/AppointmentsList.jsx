'use client'

import React from 'react';

const AppointmentsList = ({ userAppointments, selectedUser }) => {
    if (!selectedUser) return null;
    console.log(userAppointments);
    
    return (
        <div className="mt-4 p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Appointments for {selectedUser}</h2>
            <ul>
                {userAppointments.map((slot, index) => (
                    <li key={index}>{slot.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentsList;