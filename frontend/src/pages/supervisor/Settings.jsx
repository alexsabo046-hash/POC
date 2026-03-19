import { useState } from "react";

export default function Settings() {
  const [tab, setTab] = useState("profile");

  return (
    <div>

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold">Settings</h1>
        <p className="text-sm text-gray-500">
          Manage your account and preferences
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-2 mb-6">
        {["profile", "security", "notifications"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-full text-sm ${
              tab === t
                ? "bg-gray-200 font-medium"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {t === "profile" && "👤 Profile"}
            {t === "security" && "🔒 Security"}
            {t === "notifications" && "🔔 Notifications"}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      {tab === "profile" && (
        <div className="bg-white p-6 rounded-xl shadow max-w-3xl">

          <h2 className="font-medium mb-4">Profile Information</h2>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xl font-bold">
              M
            </div>

            <div>
              <button className="border px-3 py-1 rounded text-sm">
                Change Photo
              </button>
              <p className="text-xs text-gray-400 mt-1">
                JPG, PNG or GIF. Max 2MB
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-500">Full Name</label>
              <input
                className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
                defaultValue="Michael Chen"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input
                className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
                defaultValue="michael.chen@techcorp.com"
              />
            </div>

            <div className="col-span-2">
              <label className="text-sm text-gray-500">
                Company/Organization
              </label>
              <input
                className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
                defaultValue="TechCorp Inc."
              />
            </div>

          </div>

          <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
            Save Changes
          </button>
        </div>
      )}

      {/* SECURITY TAB */}
      {tab === "security" && (
        <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
          <h2 className="font-medium mb-4">Security</h2>

          <div className="space-y-4">

            <div>
              <label className="text-sm text-gray-500">Current Password</label>
              <input
                type="password"
                className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">New Password</label>
              <input
                type="password"
                className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Confirm Password</label>
              <input
                type="password"
                className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
              />
            </div>

          </div>

          <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
            Update Password
          </button>
        </div>
      )}

      {/* NOTIFICATIONS TAB */}
      {tab === "notifications" && (
        <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
          <h2 className="font-medium mb-4">Notifications</h2>

          <div className="space-y-4">

            <label className="flex items-center justify-between">
              <span className="text-sm">Email Notifications</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm">Push Notifications</span>
              <input type="checkbox" />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-sm">Weekly Reports</span>
              <input type="checkbox" defaultChecked />
            </label>

          </div>

        </div>
      )}

    </div>
  );
}