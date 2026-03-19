import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      console.log("Sending login request...");

      const res = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });

      console.log("Response status:", res.status);

      const data = await res.json();
      console.log("Response data:", data);

      if (!res.ok) {
        alert("Invalid email or password");
        return;
      }

      // SAVE AUTH
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // ROUTING
      const routes = {
        student: "/app",
        supervisor: "/app/supervisor",
        coordinator: "/app/coordinator",
      };

      navigate(routes[data.role]);

    } catch (error) {
      console.error("LOGIN ERROR:", error);

      alert("Cannot connect to server.\nCheck if backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">

      {/* Logo */}
      <div className="mb-6 text-center">
        <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
          OJT
        </div>
        <span className="ml-2 text-xl font-semibold">Track</span>

        <p className="text-gray-500 mt-2 text-sm">
          OJT Student Attendance, Task Management, and Progress Monitoring System
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-lg font-semibold mb-1">Welcome Back</h2>
        <p className="text-sm text-gray-500 mb-4">
          Sign in to your account to continue
        </p>

        {/* Role Tabs */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-4">
          {["student", "supervisor", "coordinator"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 py-2 text-sm rounded-full transition ${
                role === r
                  ? "bg-red-600 text-white"
                  : "text-gray-600"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="student@university.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-3 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-3 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Options */}
        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <span className="text-red-600 cursor-pointer">
            Forgot password?
          </span>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span className="text-red-600 cursor-pointer">Register</span>
        </p>

      </div>
    </div>
  );
}