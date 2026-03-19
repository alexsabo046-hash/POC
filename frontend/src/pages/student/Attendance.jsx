export default function Attendance() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-1">Attendance Tracking</h1>
      <p className="text-gray-500 mb-6">
        Manage your daily attendance and view history
      </p>

      {/* TOP SECTION */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        {/* Current Status */}
        <div className="col-span-2 bg-white p-4 rounded-xl shadow">

          <p className="text-sm text-gray-500 mb-2">Today's Session</p>

          <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500">Current Status</p>
              <p className="text-green-600 font-semibold">Checked In</p>
              <p className="text-xs text-gray-400">Time in: 8:00 AM</p>
            </div>

            <div className="text-xl font-bold text-blue-600">
              08:00:00
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-green-500 text-white py-2 rounded-lg">
              Time In
            </button>
            <button className="flex-1 bg-red-600 text-white py-2 rounded-lg">
              Time Out
            </button>
          </div>

        </div>

        {/* Side Cards */}
        <div className="space-y-4">

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">Total Hours This Week</p>
            <h2 className="text-xl font-bold">40 hrs</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">Attendance Rate</p>
            <h2 className="text-xl font-bold text-green-600">98%</h2>
          </div>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white p-4 rounded-xl shadow">

        <div className="flex justify-between mb-4">
          <h2 className="font-semibold">Attendance History</h2>
          <input
            type="text"
            placeholder="Search date..."
            className="border px-3 py-1 rounded-lg"
          />
        </div>

        <table className="w-full text-sm">

          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left py-2">Date</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Total Hours</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-2">2026-03-14</td>
              <td>08:00 AM</td>
              <td>05:00 PM</td>
              <td>8 hrs</td>
              <td className="text-green-600">Approved</td>
            </tr>

            <tr className="border-b">
              <td className="py-2">2026-03-13</td>
              <td>08:15 AM</td>
              <td>05:30 PM</td>
              <td>8.25 hrs</td>
              <td className="text-green-600">Approved</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}