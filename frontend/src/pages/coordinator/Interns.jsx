export default function Interns() {
  const interns = [
    {
      name: "Sarah Johnson",
      id: "STU-2024-001",
      university: "Tech University",
      hours: "320/480 hrs",
      progress: 67,
      attendance: 98,
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-1">
        Interns Management
      </h1>
      <p className="text-sm text-gray-500 mb-4">
        Monitor and manage your assigned interns
      </p>

      <div className="bg-white rounded-xl shadow p-4">
        <table className="w-full text-sm">

          <thead className="text-gray-500">
            <tr>
              <th className="text-left">Student Name</th>
              <th>ID</th>
              <th>University</th>
              <th>Hours</th>
              <th>Task</th>
              <th>Attendance</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {interns.map((i, idx) => (
              <tr key={idx} className="border-t">

                <td className="py-3">{i.name}</td>
                <td>{i.id}</td>
                <td>{i.university}</td>
                <td>{i.hours}</td>

                <td>
                  <div className="bg-gray-200 h-2 rounded">
                    <div
                      className="bg-green-500 h-2 rounded"
                      style={{ width: `${i.progress}%` }}
                    />
                  </div>
                </td>

                <td>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                    {i.attendance}%
                  </span>
                </td>

                <td>
                  <button className="text-indigo-600">View</button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}