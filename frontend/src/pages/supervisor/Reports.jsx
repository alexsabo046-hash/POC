import { useState } from "react";

export default function Reports() {
  const [tab, setTab] = useState("pending");

  const reports = [
    {
      name: "David Martinez",
      week: "Week 11",
      date: "Submitted 2026-03-12",
      tasks: "Implemented user interface components",
      challenges: "Responsive design challenges",
      skills: "React components, CSS styling",
      hours: "38 hours",
      status: "pending",
    },
    {
      name: "Sarah Johnson",
      week: "Week 12",
      date: "Submitted 2026-03-10",
      tasks: "Backend API integration",
      challenges: "Authentication issues",
      skills: "FastAPI, REST API",
      hours: "40 hours",
      status: "approved",
    },
  ];

  const filtered =
    tab === "all"
      ? reports
      : reports.filter((r) => r.status === tab);

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">Progress Reports</h1>
          <p className="text-sm text-gray-500">
            Review and approve student progress reports
          </p>
        </div>

        <input
          placeholder="Search reports..."
          className="border px-3 py-2 rounded-lg text-sm"
        />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Pending Review</p>
          <h2 className="text-xl font-bold text-orange-500">1</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Approved</p>
          <h2 className="text-xl font-bold text-green-600">2</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Reports</p>
          <h2 className="text-xl font-bold">3</h2>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-2 mb-4">
        {["pending", "approved", "all"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-1 rounded-full text-sm ${
              tab === t
                ? "bg-gray-200 font-medium"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {t === "pending" && "Pending (1)"}
            {t === "approved" && "Approved (2)"}
            {t === "all" && "All Reports (3)"}
          </button>
        ))}
      </div>

      {/* REPORT CARDS */}
      <div className="space-y-4">
        {filtered.map((r, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500"
          >
            <div className="flex justify-between mb-3">
              <div>
                <h2 className="font-semibold">
                  {r.name} - {r.week}
                </h2>
                <p className="text-sm text-gray-500">{r.date}</p>
              </div>

              <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                Pending Review
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p>
                  <b>Tasks Accomplished:</b>
                </p>
                <p className="text-gray-600">{r.tasks}</p>

                <p className="mt-2">
                  <b>Challenges:</b>
                </p>
                <p className="text-gray-600">{r.challenges}</p>
              </div>

              <div>
                <p>
                  <b>Skills Learned:</b>
                </p>
                <p className="text-gray-600">{r.skills}</p>

                <p className="mt-2">
                  <b>Hours Worked:</b>
                </p>
                <p className="text-gray-600">{r.hours}</p>
              </div>
            </div>

            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
              Review Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}