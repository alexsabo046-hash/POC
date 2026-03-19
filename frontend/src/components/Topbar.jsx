export default function Topbar() {
  return (
    <div className="w-full bg-white shadow px-6 py-3 flex justify-between items-center">

      {/* LEFT */}
      <input
        placeholder="Search..."
        className="px-3 py-1 border rounded-lg w-64"
      />

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <span>🔔</span>
        <span>💬</span>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
            M
          </div>
          <span className="text-sm font-medium">Student</span>
        </div>
      </div>
    </div>
  );
}