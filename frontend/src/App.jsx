import { Routes, Route, Navigate } from "react-router-dom";

// layouts
import StudentLayout from "./pages/student/StudentLayout";
import SupervisorLayout from "./pages/supervisor/SupervisorLayout";
import CoordinatorLayout from "./pages/coordinator/CoordinatorLayout";

// student pages
import StudentDashboard from "./pages/student/Dashboard";
import Attendance from "./pages/student/Attendance";
import Tasks from "./pages/student/Tasks";
import StudentReports from "./pages/student/Reports";
import StudentAnalytics from "./pages/student/Analytics";
import Messages from "./pages/student/Messages";
import StudentSettings from "./pages/student/Settings";

// supervisor pages
import SupervisorDashboard from "./pages/supervisor/Dashboard";
import Interns from "./pages/supervisor/Interns";
import SupervisorReports from "./pages/supervisor/Reports";
import SupervisorAnalytics from "./pages/supervisor/Analytics";
import SupervisorSettings from "./pages/supervisor/Settings";
import SupervisorMessages from "./pages/supervisor/Messages";


// coordinator pages
import CoordinatorDashboard from "./pages/coordinator/Dashboard";
import CoordinatorInterns from "./pages/coordinator/Interns";
import CoordinatorReports from "./pages/coordinator/Reports";
import CoordinatorAnalytics from "./pages/coordinator/Analytics";
import CoordinatorSettings from "./pages/coordinator/Settings";
import CoordinatorMessages from "./pages/coordinator/Messages";

function App() {
  return (
    <Routes>

      {/* DEFAULT */}
      <Route path="/" element={<Navigate to="/app" />} />

      {/* STUDENT */}
      <Route path="/app" element={<StudentLayout />}>
        <Route index element={<StudentDashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="reports" element={<StudentReports />} />
        <Route path="analytics" element={<StudentAnalytics />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<StudentSettings />} />
      </Route>

      {/* SUPERVISOR */}
      <Route path="/supervisor" element={<SupervisorLayout />}>
        <Route index element={<SupervisorDashboard />} />
        <Route path="interns" element={<Interns />} />
        <Route path="reports" element={<SupervisorReports />} />
        <Route path="analytics" element={<SupervisorAnalytics />} />
        <Route path="settings" element={<SupervisorSettings />} />
        <Route path="messages" element={<SupervisorMessages />} />

      </Route>

      {/* COORDINATOR */}
      <Route path="/coordinator" element={<CoordinatorLayout />}>
        <Route index element={<CoordinatorDashboard />} />
        <Route path="interns" element={<CoordinatorInterns />} />
        <Route path="reports" element={<CoordinatorReports />} />
        <Route path="analytics" element={<CoordinatorAnalytics />} />
        <Route path="settings" element={<CoordinatorSettings />} />
        <Route path="messages" element={<CoordinatorMessages />} />
      </Route>

    </Routes>
  );
}

export default App;