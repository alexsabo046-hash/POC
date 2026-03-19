export default function Messages() {
  return (
    <div className="grid grid-cols-3 gap-4 h-[80vh]">

      {/* LEFT */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-3">Conversations</h2>

        <div className="p-3 bg-gray-100 rounded-lg mb-2">
          <p className="font-medium">Michael Chen</p>
          <p className="text-sm text-gray-500">Great work!</p>
        </div>

        <div className="p-3 hover:bg-gray-100 rounded-lg">
          <p className="font-medium">Sarah Johnson</p>
          <p className="text-sm text-gray-500">Thanks!</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="col-span-2 bg-white p-4 rounded-xl shadow flex flex-col">

        <div className="flex-1 overflow-y-auto space-y-2">
          <div className="bg-gray-200 p-3 rounded-lg w-fit">
            Hello!
          </div>

          <div className="bg-indigo-600 text-white p-3 rounded-lg w-fit ml-auto">
            Hi!
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <input
            className="flex-1 border p-2 rounded-lg"
            placeholder="Type message..."
          />
          <button className="bg-indigo-600 text-white px-4 rounded-lg">
            Send
          </button>
        </div>

      </div>
    </div>
  );
}