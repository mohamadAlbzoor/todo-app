import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">📝 To-Do List</h1>
        </header>

        <AddTodo onAdd={() => setRefresh(!refresh)} />
        <FilterBar filter={filter} setFilter={setFilter} />
        <TodoList filter={filter} key={refresh} />
      </div>
    </div>
  );
}
