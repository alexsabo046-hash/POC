export default function Interns() {
  const interns = [
    {
      name: "Sarah Johnson",
      id: "STU-2024-001",
      university: "Tech University",
      hours: "320/480",
      progress: 67,
      attendance: 98,
    },
    {
      name: "David Martinez",
      id: "STU-2024-002",
      university: "Tech University",
      hours: "280/480",
      progress: 58,
      attendance: 95,
    },
    {
      name: "Lisa Wang",
      id: "STU-2024-003",
      university: "Tech University",
      hours: "360/480",
      progress: 75,
      attendance: 100,
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Interns Management</h1>

      <div className="bg-white rounded-xl shadow p-4">
        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left py-2">Student</th>
              <th>ID</th>
              <th>University</th>
              <th>Hours</th>
              <th>Progress</th>
              <th>Attendance</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {interns.map((i, index) => (
              <tr key={index} className="border-b">
                <td className="py-3">{i.name}</td>
                <td>{i.id}</td>
                <td>{i.university}</td>
                <td>{i.hours}</td>

                <td>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${i.progress}%` }}
                    />
                  </div>
                </td>

                <td>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                    {i.attendance}%
                  </span>
                </td>

                <td>
                  <button className="text-blue-600">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
