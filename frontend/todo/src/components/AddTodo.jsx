import { useState } from 'react';
import { addTodo } from '../api/todoApi';

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) return;
    const newTodo = await addTodo(title, isCompleted);
    onAdd(newTodo);
    setTitle('');
    setIsCompleted(false);
  };

  return (
    <div className="flex gap-2 items-center mb-4">
      <input
        type="text"
        placeholder="Add new task..."
        className="flex-1 p-2 border rounded shadow-sm"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="flex items-center gap-1 text-sm">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
        Completed
      </label>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}
