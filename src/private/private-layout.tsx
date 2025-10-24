import { Outlet } from "react-router";

function PrivateLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-56 bg-blue-2 flex flex-col">
        <header className="h-12 p-2 text-xl font-bold border border-t-0 border-l-0 border-r-0 border-blue-6">
          Bank
        </header>

        <div className="flex-1 p-2 overflow-y-auto h-72 space-y-2">
          <span className="text-sm">Home</span>
          <div></div>
        </div>

        <footer className="h-16 bg-slate-300 flex items-center justify-center">
          Footer
        </footer>
      </aside>
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export { PrivateLayout };
