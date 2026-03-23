import React, { useState, useEffect } from "react";

// Simple To‑Do List Component with Status (Pending, In‑Progress, Complete)
const arr= [
  {
    id: 1,
    text: "Learn React basics",
    status: 1 //pending
  },
  {
    id: 2,
    text: "Build a simple To-Do app",
    status: 2, //in-progres
  },
  {
    id: 3,
    text: "Practice Tailwind CSS",
    status: 3, // complete
  },
  {
    id: 4,
    text: "Review JavaScript fundamentals",
    status: 1
  },
];

export default function SimpleTodoComponent() {
  const [tasks, setTasks] = useState(arr);
  const [text, setText] = useState("");

  useEffect(() => {
 
  }, [tasks]);

  function addTask() {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTask = {
      id: Date.now(),
      text: trimmed,
      status: "pending", // default status
    };
    setTasks((t) => [newTask, ...t]);
    setText("");
  }

  function updateStatus(id, newStatus) {
    console.log(newStatus)
    setTasks((t) =>
      t.map((task) => (task.id === id ? { ...task, status: Number(newStatus) } : task))
    );
  }

  function removeTask(id) {
    setTasks((t) => t.filter((task) => task.id !== id));
  }

  const completedCount = tasks.filter((t) => t.status === 3).length;

  console.log(completedCount)
  console.log(JSON.stringify(tasks))

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white/90 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Simple To‑Do List</h2>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 p-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Add a new task and press Enter"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button
          onClick={addTask}
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <div className="mb-3 text-sm text-gray-600">
        Completed: <strong>{completedCount}</strong> / {tasks.length}
      </div>

      <ul className="space-y-2">
        {tasks.length === 0 && (
          <li className="text-gray-500">No tasks yet — add one above.</li>
        )}

        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 rounded-md border bg-gray-50"
          >
            <div>
              <span
                className={`$ {
                  task.status === "complete" ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <select
                title="Status"
                name="status"
                value={task.status}
                onChange={(e) => updateStatus(task.id, e.target.value)}
                className="border rounded-md px-2 py-1 text-sm"
              >
                <option value={1}>Pending</option>
                <option value={2}>In Progress</option>
                <option value={3}>Complete</option>
              </select>
              <button
                onClick={() => removeTask(task.id)}
                className="text-sm px-2 py-1 rounded-md border text-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between items-center text-sm">
        <div className="text-gray-600">Total tasks: {tasks.length}</div>
        <div>
          <button
            onClick={() => setTasks([])}
            className="px-3 py-1 rounded-md border text-red-600"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
