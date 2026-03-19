export default function Tasks() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-1">Tasks</h1>
      <p className="text-gray-500 mb-6">
        Manage and track your assigned tasks
      </p>

      {/* SUMMARY */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Assigned</p>
          <h2 className="text-xl font-bold">1</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">In Progress</p>
          <h2 className="text-xl font-bold">2</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Completed</p>
          <h2 className="text-xl font-bold">1</h2>
        </div>

      </div>

      {/* FILTER TABS */}
      <div className="flex gap-2 mb-6">
        <button className="bg-red-600 text-white px-4 py-1 rounded-full text-sm">
          All Tasks (4)
        </button>
        <button className="bg-gray-200 px-4 py-1 rounded-full text-sm">
          Assigned (1)
        </button>
        <button className="bg-gray-200 px-4 py-1 rounded-full text-sm">
          In Progress (2)
        </button>
        <button className="bg-gray-200 px-4 py-1 rounded-full text-sm">
          Completed (1)
        </button>
      </div>

      {/* TASK CARDS */}
      <div className="grid grid-cols-2 gap-4">

        {/* TASK 1 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between">
            <h3 className="font-semibold">
              Develop User Authentication Module
            </h3>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
              high
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Create login and registration using React and Node.js
          </p>

          <div className="flex justify-between text-xs text-gray-400 mt-4">
            <span>📅 Due: 2026-03-20</span>
            <span>👤 Michael Chen</span>
          </div>
        </div>

        {/* TASK 2 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between">
            <h3 className="font-semibold">
              Design Database Schema
            </h3>
            <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
              medium
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Create ERD and database design
          </p>

          <div className="flex justify-between text-xs text-gray-400 mt-4">
            <span>📅 Due: 2026-03-15</span>
            <span>👤 Michael Chen</span>
          </div>
        </div>

        {/* TASK 3 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between">
            <h3 className="font-semibold">
              Write API Documentation
            </h3>
            <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
              medium
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Document all REST API endpoints
          </p>

          <div className="flex justify-between text-xs text-gray-400 mt-4">
            <span>📅 Due: 2026-03-25</span>
            <span>👤 Michael Chen</span>
          </div>
        </div>

        {/* TASK 4 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between">
            <h3 className="font-semibold">
              Implement Dashboard UI
            </h3>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
              high
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Create responsive dashboard interface
          </p>

          <div className="flex justify-between text-xs text-gray-400 mt-4">
            <span>📅 Due: 2026-03-22</span>
            <span>👤 Michael Chen</span>
          </div>
        </div>

      </div>

    </div>
  );
}