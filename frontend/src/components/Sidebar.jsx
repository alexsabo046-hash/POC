import { NavLink } from "react-router-dom";

export default function Sidebar({ role }) {

  const menus = {
    student: [
      { name: "Dashboard", path: "/app" },
      { name: "Attendance", path: "/app/attendance" },
      { name: "Tasks", path: "/app/tasks" },
      { name: "Reports", path: "/app/reports" },
      { name: "Analytics", path: "/app/analytics" },
      { name: "Messages", path: "/app/messages" },
      { name: "Settings", path: "/app/settings" },
    ],

    supervisor: [
      { name: "Dashboard", path: "/supervisor" },
      { name: "Interns", path: "/supervisor/interns" },
      { name: "Reports", path: "/supervisor/reports" },
      { name: "Analytics", path: "/supervisor/analytics" },
      { name: "Messages", path: "/supervisor/messages" },
      { name: "Settings", path: "/supervisor/settings" },
    ],

    coordinator: [
      { name: "Dashboard", path: "/coordinator" },
      { name: "All Interns", path: "/coordinator/interns" },
      { name: "Reports", path: "/coordinator/reports" },
      { name: "Analytics", path: "/coordinator/analytics" },
      { name: "Messages", path: "/coordinator/messages" },
      { name: "Settings", path: "/coordinator/settings" },
     
    ],
  };

  const menu = menus[role] || [];

return (
  <div className="w-64 min-h-screen bg-white shadow-md p-4 flex flex-col justify-between">

    {/* TOP */}
    <div>
      <div className="mb-6">
        <span className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold">
          OJT
        </span>
        <span className="ml-2 font-semibold">Track</span>
      </div>

      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm ${
                isActive
                  ? "bg-red-100 text-red-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>

    {/* BOTTOM (LOGOUT) */}
    <button
      className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg"
      onClick={() => {
        localStorage.clear();
        window.location.href = "/";
      }}
    >
      Logout
    </button>

  </div>
);
}