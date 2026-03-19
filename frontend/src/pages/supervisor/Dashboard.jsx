export default function SupervisorDashboard() {
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-semibold">
        Supervisor Dashboard
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-4 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Assigned Interns</p>
          <h2 className="text-xl font-bold">3</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Pending Reports</p>
          <h2 className="text-xl font-bold">5</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Avg Task Completion</p>
          <h2 className="text-xl font-bold">67%</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Attendance Alerts</p>
          <h2 className="text-xl font-bold">2</h2>
        </div>

      </div>

      {/* ASSIGNED INTERNS */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Assigned Interns</h2>

        <div className="space-y-3">

          <div className="flex justify-between items-center border p-3 rounded-lg">
            <div>
              <p className="font-medium">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Tech University</p>
            </div>
            <div className="text-right">
              <p>320 / 480 hrs</p>
              <p className="text-sm text-gray-500">67%</p>
            </div>
          </div>

          <div className="flex justify-between items-center border p-3 rounded-lg">
            <div>
              <p className="font-medium">David Martinez</p>
              <p className="text-sm text-gray-500">Tech University</p>
            </div>
            <div className="text-right">
              <p>280 / 480 hrs</p>
              <p className="text-sm text-gray-500">58%</p>
            </div>
          </div>

        </div>
      </div>

      {/* PENDING REVIEWS */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Pending Reviews</h2>

        <div className="space-y-3">

          <div className="flex justify-between items-center border p-3 rounded-lg">
            <div>
              <p>Sarah Johnson - Week 13 Report</p>
              <p className="text-sm text-gray-500">Submitted 1 day ago</p>
            </div>

            <button className="bg-blue-600 text-white px-4 py-1 rounded-lg">
              Review
            </button>
          </div>

          <div className="flex justify-between items-center border p-3 rounded-lg">
            <div>
              <p>David Martinez - Week 12 Report</p>
              <p className="text-sm text-gray-500">Submitted 2 days ago</p>
            </div>

            <button className="bg-blue-600 text-white px-4 py-1 rounded-lg">
              Review
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}