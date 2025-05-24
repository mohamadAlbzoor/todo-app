import { useEffect, useState } from 'react';
import {
  fetchTodos,
  updateTodo,
  deleteTodo,
  patchTodo
} from '../api/todoApi';
import { motion, AnimatePresence } from 'framer-motion';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const handleToggle = async (todo) => {
    const updated = { ...todo, isCompleted: !todo.isCompleted };
    await updateTodo(updated);
    setTodos(todos.map(t => (t.id === todo.id ? updated : t)));
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(t => t.id !== id));
  };

  const filtered =
    filter === 'active'
      ? todos.filter(t => !t.isCompleted)
      : filter === 'completed'
      ? todos.filter(t => t.isCompleted)
      : todos;

  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {filtered.map((todo) => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex justify-between items-center p-2 bg-white rounded shadow-sm"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleToggle(todo)}
              />
              <span
                className={`text-lg ${todo.isCompleted ? 'line-through text-gray-400' : ''}`}
              >
                {todo.title}
              </span>
            </label>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDelete(todo.id)}
            >
              🗑️
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
