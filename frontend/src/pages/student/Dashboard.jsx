export default function StudentDashboard() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
      <p className="text-gray-500 mb-6">
        Welcome back! Here's your OJT progress overview.
      </p>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-4 gap-4 mb-6">

        <button className="bg-green-500 text-white py-3 rounded-lg">
          Time In
        </button>

        <button className="bg-red-600 text-white py-3 rounded-lg">
          Time Out
        </button>

        <button className="border py-3 rounded-lg">
          Submit Report
        </button>

        <button className="border py-3 rounded-lg">
          View Tasks
        </button>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-4 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Hours</p>
          <h2 className="text-xl font-bold">320 hrs</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Remaining Hours</p>
          <h2 className="text-xl font-bold">160 hrs</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Tasks</p>
          <h2 className="text-xl font-bold">12</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Status</p>
          <h2 className="text-green-500 font-bold">Checked In</h2>
        </div>

      </div>

    </div>
  );
}