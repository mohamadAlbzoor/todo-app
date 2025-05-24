export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-4 my-4">
      {['all', 'active', 'completed'].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-1 rounded-full transition text-sm capitalize
            ${f === filter ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
