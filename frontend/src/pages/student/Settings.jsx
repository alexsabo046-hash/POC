import { useState } from "react";

export default function Settings() {
  const [tab, setTab] = useState("profile");

  return (
    <div>

      <h1 className="text-2xl font-bold mb-1">Settings</h1>
      <p className="text-gray-500 mb-6">
        Manage your account and preferences
      </p>

      {/* TABS */}
      <div className="flex gap-2 mb-6">
        {["profile", "security", "notifications", "internship"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1 rounded-full text-sm ${
              tab === t
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="bg-white p-6 rounded-xl shadow">

        {/* PROFILE */}
        {tab === "profile" && (
          <div>
            <h2 className="font-semibold mb-4">Profile Information</h2>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center rounded-full text-xl">
                S
              </div>
              <button className="border px-3 py-1 rounded">
                Change Photo
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="Full Name" />
              <input className="border p-2 rounded" placeholder="Email" />
              <input className="border p-2 rounded" placeholder="Student ID" />
              <input className="border p-2 rounded" placeholder="University" />
            </div>

            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </div>
        )}

        {/* SECURITY */}
        {tab === "security" && (
          <div>
            <h2 className="font-semibold mb-4">Security Settings</h2>

            <input
              type="password"
              placeholder="Current Password"
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="password"
              placeholder="New Password"
              className="border p-2 rounded w-full mb-3"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-2 rounded w-full mb-3"
            />

            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Update Password
            </button>

            <div className="mt-6">
              <p className="font-medium mb-2">Two-Factor Authentication</p>
              <button className="border px-4 py-2 rounded">
                Enable 2FA
              </button>
            </div>
          </div>
        )}

        {/* NOTIFICATIONS */}
        {tab === "notifications" && (
          <div>
            <h2 className="font-semibold mb-4">Notification Preferences</h2>

            {[
              "Email Notifications",
              "Task Reminders",
              "Attendance Alerts",
              "Weekly Reports",
            ].map((n, i) => (
              <div key={i} className="flex justify-between mb-3">
                <span>{n}</span>
                <input type="checkbox" defaultChecked />
              </div>
            ))}

            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
              Save Preferences
            </button>
          </div>
        )}

        {/* INTERNSHIP */}
        {tab === "internship" && (
          <div>
            <h2 className="font-semibold mb-4">Internship Details</h2>

            <div className="grid grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="Company Name" />
              <input className="border p-2 rounded" placeholder="Department" />
              <input className="border p-2 rounded" placeholder="Start Date" />
              <input className="border p-2 rounded" placeholder="End Date" />
              <input className="border p-2 rounded" placeholder="Required Hours" />
              <input className="border p-2 rounded" placeholder="Supervisor" />
            </div>

            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
              Update Information
            </button>
          </div>
        )}

      </div>
    </div>
  );
}