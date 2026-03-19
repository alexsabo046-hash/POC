import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";

export default function Analytics() {

  const lineData = [
    { day: "Mon", score: 85 },
    { day: "Tue", score: 90 },
    { day: "Wed", score: 88 },
    { day: "Thu", score: 92 },
    { day: "Fri", score: 87 },
  ];

  const barData = [
    { week: "W1", tasks: 5, hours: 35 },
    { week: "W2", tasks: 8, hours: 40 },
    { week: "W3", tasks: 4, hours: 32 },
    { week: "W4", tasks: 7, hours: 38 },
  ];

  const pieData = [
    { name: "Development", value: 40 },
    { name: "Documentation", value: 25 },
    { name: "Testing", value: 20 },
    { name: "Meetings", value: 15 },
  ];

  const COLORS = ["#ef4444", "#22c55e", "#f59e0b", "#3b82f6"];

  return (
    <div>

      <h1 className="text-2xl font-bold mb-1">Analytics & Insights</h1>
      <p className="text-gray-500 mb-6">
        Track your performance and progress over time
      </p>

      {/* TOP STATS */}
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
          <h2 className="text-xl font-bold text-green-600">98%</h2>
        </div>

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        {/* LINE CHART */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="mb-4 font-medium">Daily Productivity Score</h2>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="mb-4 font-medium">Weekly Productivity</h2>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasks" fill="#ef4444" />
              <Bar dataKey="hours" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* PIE + PERFORMANCE */}
      <div className="grid grid-cols-2 gap-4">

        {/* PIE */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="mb-4 font-medium">Task Distribution</h2>

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

        {/* PERFORMANCE */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="mb-4 font-medium">Performance Summary</h2>

          <div className="mb-4">
            <p className="text-sm">Time Management - 92%</p>
            <div className="bg-gray-200 h-2 rounded">
              <div className="bg-green-500 h-2 rounded w-[92%]"></div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm">Task Quality - 88%</p>
            <div className="bg-gray-200 h-2 rounded">
              <div className="bg-blue-500 h-2 rounded w-[88%]"></div>
            </div>
          </div>

          <div>
            <p className="text-sm">Collaboration - 95%</p>
            <div className="bg-gray-200 h-2 rounded">
              <div className="bg-purple-500 h-2 rounded w-[95%]"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}