import { useState } from "react";

export default function Messages() {
  const [selected, setSelected] = useState(0);

  const conversations = [
    {
      name: "Michael Chen",
      role: "Supervisor",
      last: "Great work on the authentication module!",
      time: "10:30 AM",
      unread: 2,
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Coordinator",
      last: "Please submit your mid-term evaluation by Friday.",
      time: "Yesterday",
    },
    {
      name: "Sarah Johnson",
      role: "Student",
      last: "Thank you for the feedback!",
      time: "2 days ago",
    },
  ];

  const messages = [
    {
      sender: "them",
      text: "Hi Sarah, I reviewed your latest work on the authentication module.",
      time: "10:15 AM",
    },
    {
      sender: "me",
      text: "Thank you! I spent a lot of time on the security aspects.",
      time: "10:20 AM",
    },
    {
      sender: "them",
      text: "It shows! The implementation is solid.",
      time: "10:25 AM",
    },
  ];

  return (
    <div className="flex h-[80vh] gap-4">

      {/* LEFT SIDE (CONVERSATIONS) */}
      <div className="w-1/3 bg-white rounded-xl shadow p-4">

        <h2 className="font-medium mb-3">Conversations</h2>

        <input
          placeholder="Search messages..."
          className="w-full mb-3 px-3 py-2 border rounded-lg text-sm"
        />

        <div className="space-y-2">
          {conversations.map((c, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className={`p-3 rounded-lg cursor-pointer ${
                selected === i ? "bg-indigo-100" : "hover:bg-gray-100"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">{c.name}</h3>
                {c.unread && (
                  <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {c.unread}
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500">{c.role}</p>
              <p className="text-xs text-gray-400 mt-1">{c.last}</p>
              <p className="text-xs text-gray-400">{c.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE (CHAT) */}
      <div className="flex-1 bg-white rounded-xl shadow flex flex-col">

        {/* HEADER */}
        <div className="p-4 border-b">
          <h2 className="font-medium">
            {conversations[selected].name}
          </h2>
          <p className="text-xs text-gray-500">
            {conversations[selected].role}
          </p>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg text-sm max-w-xs ${
                  m.sender === "me"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                <p>{m.text}</p>
                <span className="text-xs opacity-70 block mt-1">
                  {m.time}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* INPUT */}
        <div className="p-4 border-t flex gap-2">
          <input
            placeholder="Type your message..."
            className="flex-1 border rounded-lg px-3 py-2 text-sm"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Send
          </button>
        </div>

      </div>
    </div>
  );
}