import CalendarComponent from './CalendarComponent'
import UserTableWrapper from './UserTableWrapper'

export default function Appointments() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 min-h-screen bg-gray-100">
      <div className="md:col-span-1">
        <UserTableWrapper />
      </div>
      <div className="md:col-span-2">
        <CalendarComponent />
      </div>
    </div>
  )
}