import { useState } from "react";

export default function Messages() {

  const [selected, setSelected] = useState(0);

  const conversations = [
    {
      name: "Michael Chen",
      role: "Supervisor",
      message: "Great work on the authentication module!",
      time: "10:30 AM",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Coordinator",
      message: "Please submit your mid-term evaluation.",
      time: "Yesterday",
    },
    {
      name: "Sarah Johnson",
      role: "Student",
      message: "Thank you for the feedback!",
      time: "2 days ago",
    },
  ];

  const messages = [
    { sender: "them", text: "Hi Sarah, I reviewed your latest work.", time: "10:15 AM" },
    { sender: "me", text: "Thank you! I spent a lot of time on it.", time: "10:20 AM" },
    { sender: "them", text: "It shows! Just a few suggestions.", time: "10:25 AM" },
  ];

  return (
    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Messages</h1>
          <p className="text-gray-500">
            Communicate with supervisors and students
          </p>
        </div>

        <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
          + New Message
        </button>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-3 gap-4 h-[600px]">

        {/* LEFT - CONVERSATIONS */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col">

          <input
            type="text"
            placeholder="Search messages..."
            className="mb-4 border px-3 py-2 rounded-lg"
          />

          <div className="flex-1 overflow-y-auto">

            {conversations.map((c, i) => (
              <div
                key={i}
                onClick={() => setSelected(i)}
                className={`p-3 rounded-lg mb-2 cursor-pointer ${
                  selected === i ? "bg-red-100" : "hover:bg-gray-100"
                }`}
              >
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-gray-500">{c.role}</p>
                <p className="text-sm text-gray-400">{c.message}</p>
                <p className="text-xs text-gray-400">{c.time}</p>
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT - CHAT */}
        <div className="col-span-2 bg-white rounded-xl shadow flex flex-col">

          {/* CHAT HEADER */}
          <div className="p-4 border-b font-medium">
            {conversations[selected].name}
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">

            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-xs p-3 rounded-lg text-sm ${
                  m.sender === "me"
                    ? "bg-red-600 text-white ml-auto"
                    : "bg-gray-100"
                }`}
              >
                {m.text}
                <div className="text-xs mt-1 opacity-70">
                  {m.time}
                </div>
              </div>
            ))}

          </div>

          {/* INPUT */}
          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border px-3 py-2 rounded-lg"
            />

            <button className="bg-red-600 text-white px-4 rounded-lg">
              Send
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}