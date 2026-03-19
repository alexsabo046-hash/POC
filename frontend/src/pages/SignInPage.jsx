import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export default function SignInPage() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const routes = {
    student: "/app",
    supervisor: "/app/supervisor",
    coordinator: "/app/coordinator",
  };

  const handleLogin = async () => {
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
          role,
        }),
      });

      let data = {};
      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        data = { message: text };
      }

      console.log("Response status:", res.status);
      console.log("Response data:", data);

      if (!res.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      if (!data.token || !data.role) {
        setError("Login succeeded but response is incomplete.");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      const targetRoute = routes[data.role];
      if (!targetRoute) {
        setError("Unknown user role returned by server.");
        return;
      }

      console.log("Returned role:", data.role);
      console.log("Navigating to:", targetRoute);
      navigate(targetRoute);
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      setError(`Cannot connect to server: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="mb-6 text-center">
        <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
          OJT
        </div>
        <span className="ml-2 text-xl font-semibold">Track</span>

        <p className="text-gray-500 mt-2 text-sm">
          OJT Student Attendance, Task Management, and Progress Monitoring System
        </p>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-1">Welcome Back</h2>
        <p className="text-sm text-gray-500 mb-4">
          Sign in to your account to continue
        </p>

        <div className="flex bg-gray-100 rounded-full p-1 mb-4">
          {["student", "supervisor", "coordinator"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`flex-1 py-2 text-sm rounded-full transition ${
                role === r ? "bg-red-600 text-white" : "text-gray-600"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="student@university.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full mt-1 px-3 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full mt-1 px-3 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <span className="text-red-600 cursor-pointer">
            Forgot password?
          </span>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-3 py-2">
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span className="text-red-600 cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
}