export default function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1">Settings</h1>
      <p className="text-gray-500 mb-6">
        Manage your account and preferences
      </p>

      <div className="bg-white p-6 rounded-xl shadow max-w-2xl">

        {/* PROFILE */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
            D
          </div>

          <button className="border px-3 py-1 rounded-lg">
            Change Photo
          </button>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="text-sm">Full Name</label>
            <input
              className="w-full border p-2 rounded-lg"
              defaultValue="Dr. Emily Rodriguez"
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              className="w-full border p-2 rounded-lg"
              defaultValue="email@university.edu"
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm">Organization</label>
            <input
              className="w-full border p-2 rounded-lg"
            />
          </div>

        </div>

        <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg">
          Save Changes
        </button>

      </div>
    </div>
  );
}