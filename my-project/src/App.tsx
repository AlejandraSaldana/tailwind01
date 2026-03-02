import './App.css'
import PrimaryButton from './components/PrimaryButton'
import SideBarMenu from './components/SideBarMenu'
import InfoCard from './components/InfoCard'

function App() {

  return (
    <>
      <div className="min-h-screen bg-slate-50 p-6">
        <header className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-row gap-4 items-center"> 
            <h2 className="text-lg font-semibold">Mis Finanzas</h2>
            <div className="ml-auto">
              <PrimaryButton label="Cerrar Sesión"/>
            </div>
          </div>
        </header>

        <main className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[260px_1fr]">
          <aside className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <SideBarMenu/>
          </aside>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Dashboard</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <InfoCard label="Gastos" img="https://placehold.co/600x360/e2e8f0/334155?text=Imagen"/>
              <InfoCard label="Ingresos" img="https://placehold.co/600x360/e2e8f0/334155?text=Imagen"/>
              <InfoCard label="Total" img="https://placehold.co/600x360/e2e8f0/334155?text=Imagen"/>
            </div>
          </section>
        </main>

        <footer className="mt-4 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-600">
          © 2026 Alejandra Saldana Rodriguez
        </footer>
      </div>
    </>
  )
}

export default App