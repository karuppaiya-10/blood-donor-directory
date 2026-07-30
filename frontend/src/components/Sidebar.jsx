export default function Sidebar({ page, setPage }) {
  const links = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'donors',    icon: '🩸', label: 'Donors'    },
  ];

  return (
    <>
      {/* Bottom nav — mobile only */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-red-700 to-red-900 flex justify-around py-2 shadow-lg">
        {links.map(l => (
          <button key={l.id} onClick={() => setPage(l.id)}
            className={`flex flex-col items-center gap-0.5 px-8 py-1 rounded-xl text-xs font-semibold transition-all
              ${page === l.id ? 'bg-white text-red-700' : 'text-red-100'}`}>
            <span className="text-xl">{l.icon}</span>
            <span>{l.label}</span>
          </button>
        ))}
      </nav>

      {/* Sidebar — desktop only */}
      <aside className="hidden sm:flex fixed top-0 left-0 h-full w-56 bg-gradient-to-b from-red-700 to-red-900 flex-col shadow-2xl z-40">
        <div className="px-4 py-6 border-b border-red-600/50">
          <div className="flex items-center gap-3">
            <span className="text-3xl animate-bounce">🩸</span>
            <div>
              <p className="text-white font-extrabold text-sm leading-tight">A Drop of Hope</p>
              <p className="text-red-300 text-xs">Blood Directory</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-6 space-y-1 px-2">
          {links.map(l => (
            <button key={l.id} onClick={() => setPage(l.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95
                ${page === l.id ? 'bg-white text-red-700 shadow-md' : 'text-red-100 hover:bg-red-600/50'}`}>
              <span className="text-xl">{l.icon}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-red-600/50">
          <p className="text-red-300 text-xs text-center">Save Lives · Give Blood</p>
        </div>
      </aside>
    </>
  );
}
