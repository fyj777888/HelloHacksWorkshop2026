import { useState } from 'react'

const types = [
  { name: 'Fire', icon: '🔥', style: 'border-orange-200 bg-orange-50 text-orange-800 hover:bg-orange-100' },
  { name: 'Water', icon: '💧', style: 'border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100' },
  { name: 'Grass', icon: '🌿', style: 'border-green-200 bg-green-50 text-green-800 hover:bg-green-100' },
  { name: 'Ground', icon: '⛰️', style: 'border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100' },
]

function App() {
  const [selectedType, setSelectedType] = useState(null)

  return (
    <main className="flex min-h-svh items-center justify-center px-5 py-12">
      <section aria-labelledby="page-title" className="w-full max-w-lg overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <div className="h-2 bg-red-500" />
        <div className="px-6 py-10 sm:px-10">
          <header className="text-center">
            <svg aria-hidden="true" viewBox="0 0 48 48" className="mx-auto mb-5 size-12">
              <circle cx="24" cy="24" r="21" fill="white" />
              <path d="M3 24a21 21 0 0 1 42 0Z" fill="#ef4444" />
              <circle cx="24" cy="24" r="21" fill="none" stroke="#1e293b" strokeWidth="3" />
              <path d="M3 24h42" stroke="#1e293b" strokeWidth="3" />
              <circle cx="24" cy="24" r="7" fill="white" stroke="#1e293b" strokeWidth="3" />
            </svg>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-600">Trainer toolkit</p>
            <h1 id="page-title" className="text-3xl font-bold tracking-tight">Pokémon Battle Assistant</h1>
          </header>

          <fieldset className="mt-8">
            <legend className="mb-4 w-full text-center text-sm text-slate-600">What type of Pokémon are you fighting?</legend>
            <div className="grid grid-cols-2 gap-3">
              {types.map((type) => (
                <button
                  key={type.name}
                  type="button"
                  aria-pressed={selectedType === type.name}
                  onClick={() => setSelectedType(type.name)}
                  className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700 ${type.style} ${selectedType === type.name ? 'ring-2 ring-slate-700 ring-offset-2' : ''}`}
                >
                  <span aria-hidden="true" className="text-xl">{type.icon}</span>
                  {type.name}
                </button>
              ))}
            </div>
          </fieldset>

          <p role="status" className="mt-6 text-center text-sm text-slate-500">
            {selectedType ? `${selectedType} type selected.` : 'Choose a type to get started.'}
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
