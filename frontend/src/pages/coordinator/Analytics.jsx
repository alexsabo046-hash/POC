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
    { month: "Sep", hours: 150 },
    { month: "Oct", hours: 170 },
    { month: "Nov", hours: 140 },
    { month: "Dec", hours: 180 },
    { month: "Jan", hours: 175 },
    { month: "Feb", hours: 160 },
    { month: "Mar", hours: 90 },
  ];

  const weeklyData = [
    { week: "W1", tasks: 5, hours: 40 },
    { week: "W2", tasks: 7, hours: 42 },
    { week: "W3", tasks: 4, hours: 38 },
    { week: "W4", tasks: 8, hours: 41 },
    { week: "W5", tasks: 5, hours: 43 },
  ];

  const pieData = [
    { name: "Development", value: 40, color: "#4f46e5" },
    { name: "Documentation", value: 25, color: "#10b981" },
    { name: "Testing", value: 20, color: "#f59e0b" },
    { name: "Meetings", value: 15, color: "#ef4444" },
  ];

  const productivityData = [
    { day: "Mon", score: 85 },
    { day: "Tue", score: 90 },
    { day: "Wed", score: 88 },
    { day: "Thu", score: 92 },
    { day: "Fri", score: 87 },
  ];

  return (
    <div>
      {/* HEADER */}
      <h1 className="text-2xl font-semibold mb-1">
        Analytics & Insights
      </h1>
      <p className="text-gray-500 mb-6">
        Comprehensive analytics and performance metrics
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Stat title="Avg Hours/Week" value="40.5" sub="+2.5%" />
        <Stat title="Productivity Score" value="88%" sub="+5%" />
        <Stat title="Tasks Completed" value="27" sub="This month" />
        <Stat title="Attendance Rate" value="98%" sub="Excellent" />
      </div>

      {/* CHARTS TOP */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        {/* LINE */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="mb-3 font-medium">Monthly Hours Logged</h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="#6366f1"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* BAR */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="mb-3 font-medium">Weekly Productivity</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasks" fill="#6366f1" />
              <Bar dataKey="hours" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CHARTS BOTTOM */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        {/* PIE */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="mb-3 font-medium">Task Distribution</h3>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={90}
                label
              >
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* LINE SMALL */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="mb-3 font-medium">
            Daily Productivity Score
          </h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={productivityData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* PERFORMANCE */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="mb-4 font-medium">Performance Summary</h3>

        <Progress label="Time Management" value={92} />
        <Progress label="Task Quality" value={88} />
        <Progress label="Collaboration" value={95} />
      </div>
    </div>
  );
}

/* COMPONENTS */

function Stat({ title, value, sub }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
      <p className="text-xs text-green-500">{sub}</p>
    </div>
  );
}

function Progress({ label, value }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-indigo-500 h-2 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}