import { Outlet } from "react-router";

function PrivateLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-56 bg-red-400 flex flex-col">
        <header className="h-10 bg-blue-300 flex items-center justify-center">
          Header
        </header>

        <div className="flex-1 p-4 overflow-y-auto h-72">
          Sou fixa na lateral!
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
