export default function Reports() {
  return (
    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Progress Reports</h1>
          <p className="text-gray-500">
            Submit and track your weekly progress reports
          </p>
        </div>

        <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
          + Submit New Report
        </button>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Reports</p>
          <h2 className="text-xl font-bold">12</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Approved</p>
          <h2 className="text-xl font-bold text-green-600">10</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Pending</p>
          <h2 className="text-xl font-bold text-orange-500">2</h2>
        </div>

      </div>

      {/* REPORT CARD */}
      <div className="bg-white p-6 rounded-xl shadow mb-4">

        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Week 12 Progress Report</h2>
          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
            approved
          </span>
        </div>

        <p className="text-sm text-gray-400 mb-4">
          Submitted on 2026-03-10
        </p>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-sm font-medium">Tasks Accomplished</p>
            <p className="text-sm text-gray-500">
              Completed user authentication, started dashboard design
            </p>

            <p className="text-sm font-medium mt-4">Challenges</p>
            <p className="text-sm text-gray-500">
              Initial confusion with token refresh flow
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Skills Learned</p>
            <p className="text-sm text-gray-500">
              JWT authentication, React Context API
            </p>

            <p className="text-sm font-medium mt-4">Hours Worked</p>
            <p className="text-sm text-gray-500">
              40 hours
            </p>
          </div>

        </div>

        {/* FEEDBACK */}
        <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded-lg">
          <p className="text-sm font-medium text-green-700">
            Supervisor Feedback
          </p>
          <p className="text-sm text-green-600">
            Excellent progress! Great work on authentication.
          </p>
        </div>

      </div>

    </div>
  );
}