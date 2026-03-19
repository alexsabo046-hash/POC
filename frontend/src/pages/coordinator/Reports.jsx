import { useState } from "react";

export default function Reports() {
  const [activeTab, setActiveTab] = useState("pending");

  const reports = [
    {
      name: "David Martinez - Week 11",
      status: "pending",
      tasks: "Implemented UI components",
      skills: "React, CSS",
      hours: "38 hours",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1">Progress Reports</h1>
      <p className="text-gray-500 mb-6">
        Review and approve student progress reports
      </p>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Pending Review</p>
          <h2 className="text-xl font-bold text-red-500">1</h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Approved</p>
          <h2 className="text-xl font-bold text-green-500">2</h2>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Total Reports</p>
          <h2 className="text-xl font-bold">3</h2>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-3 mb-4">
        {["pending", "approved", "all"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab
                ? "bg-gray-200 font-medium"
                : "bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CARD */}
      {reports.map((report, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow border-l-4 border-orange-400"
        >
          <h3 className="font-semibold mb-2">{report.name}</h3>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Tasks:</p>
              <p>{report.tasks}</p>
            </div>
            <div>
              <p className="font-medium">Skills:</p>
              <p>{report.skills}</p>
            </div>
            <div>
              <p className="font-medium">Hours:</p>
              <p>{report.hours}</p>
            </div>
          </div>

          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Review Report
          </button>
        </div>
      ))}
    </div>
  );
}