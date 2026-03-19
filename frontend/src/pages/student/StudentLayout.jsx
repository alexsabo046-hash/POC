import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { Outlet } from "react-router-dom";

export default function StudentLayout() {
  return (
    <div className="flex">

      {/* SIDEBAR */}
      <Sidebar role="student" />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <Topbar />

        {/* CONTENT */}
        <div className="p-6 bg-gray-50 min-h-screen">
          <Outlet />
        </div>

      </div>
    </div>
  );
}