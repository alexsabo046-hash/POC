import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { Outlet } from "react-router-dom";

export default function SupervisorLayout() {
  return (
    <div className="flex">

      {/* SIDEBAR */}
      <Sidebar role="supervisor" />

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