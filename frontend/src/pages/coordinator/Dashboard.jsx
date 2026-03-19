import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function Dashboard() {
  const trendData = [
    { name: "Sep", value: 35 },
    { name: "Oct", value: 38 },
    { name: "Nov", value: 41 },
    { name: "Dec", value: 45 },
    { name: "Jan", value: 44 },
    { name: "Feb", value: 45 },
    { name: "Mar", value: 45 },
  ];

  const deptData = [
    { name: "Engineering", hours: 5000 },
    { name: "Design", hours: 3000 },
    { name: "Marketing", hours: 2500 },
    { name: "HR", hours: 1500 },
    { name: "Finance", hours: 2000 },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-1">
        Coordinator Dashboard
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        System-wide overview and analytics
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { title: "Total Interns", value: "45" },
          { title: "Active Programs", value: "8" },
          { title: "Total Hours Logged", value: "14,400" },
          { title: "Attendance Compliance", value: "96%" },
        ].map((c) => (
          <div key={c.title} className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-500">{c.title}</p>
            <h2 className="text-xl font-bold mt-1">{c.value}</h2>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm mb-3">
            Internship Participation Trend
          </h2>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line dataKey="value" stroke="#6366f1" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm mb-3">
            Hours Logged by Department
          </h2>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={deptData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}