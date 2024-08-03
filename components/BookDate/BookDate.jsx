import BookDateForm from './BookDateForm'

export default function BookDate() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-5/6 mx-auto p-4 bg-white rounded shadow">
        <h1 className="text-xl font-semibold mb-4">Book a Slot</h1>
        <BookDateForm />
      </div>
    </div>
  )
}