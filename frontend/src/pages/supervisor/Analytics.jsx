import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  // DATA
  const monthlyData = [
    { name: "Sep", hours: 150 },
    { name: "Oct", hours: 170 },
    { name: "Nov", hours: 140 },
    { name: "Dec", hours: 180 },
    { name: "Jan", hours: 170 },
    { name: "Feb", hours: 160 },
    { name: "Mar", hours: 90 },
  ];

  const weeklyData = [
    { name: "W1", tasks: 10, hours: 40 },
    { name: "W2", tasks: 12, hours: 45 },
    { name: "W3", tasks: 8, hours: 38 },
    { name: "W4", tasks: 14, hours: 42 },
    { name: "W5", tasks: 9, hours: 44 },
  ];

  const pieData = [
    { name: "Development", value: 40 },
    { name: "Documentation", value: 25 },
    { name: "Testing", value: 20 },
    { name: "Meetings", value: 15 },
  ];

  const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444"];

  const dailyData = [
    { name: "Mon", score: 85 },
    { name: "Tue", score: 90 },
    { name: "Wed", score: 88 },
    { name: "Thu", score: 92 },
    { name: "Fri", score: 87 },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold">Analytics & Insights</h1>
        <p className="text-sm text-gray-500">
          Comprehensive analytics and performance metrics
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Avg Hours/Week</p>
          <h2 className="text-xl font-bold">40.5</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Productivity Score</p>
          <h2 className="text-xl font-bold">88%</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Tasks Completed</p>
          <h2 className="text-xl font-bold">27</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Attendance Rate</p>
          <h2 className="text-xl font-bold">98%</h2>
        </div>
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        {/* LINE CHART */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm mb-3">Monthly Hours Logged</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="hours" stroke="#6366f1" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm mb-3">Weekly Productivity</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasks" fill="#6366f1" />
              <Bar dataKey="hours" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        {/* PIE */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm mb-3">Task Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80}>
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* LINE DAILY */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-sm mb-3">Daily Productivity Score</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={dailyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#10b981" />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* PERFORMANCE */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-sm mb-4">Performance Summary</h2>

        {[
          { label: "Time Management", value: 92, color: "bg-green-500" },
          { label: "Task Quality", value: 88, color: "bg-blue-500" },
          { label: "Collaboration", value: 95, color: "bg-purple-500" },
        ].map((item) => (
          <div key={item.label} className="mb-3">
            <div className="flex justify-between text-xs">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded">
              <div
                className={`h-2 rounded ${item.color}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}