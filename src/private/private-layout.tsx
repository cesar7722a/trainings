import { Redo } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router";

// type MenuItem = {
//   name: string;
//   path: string;
//   icon: LucideIcon;
//   active: boolean;
// };

const menuAsideBar = [
  {
    name: "Transfer",
    path: "transfer",
    icon: Redo,
    active: true,
  },
  {
    name: "Deposit",
    path: "deposit",
    icon: Redo,
    active: false,
  },
  {
    name: "Withdraw",
    path: "withdraw",
    icon: Redo,
    active: false,
  },
  {
    name: "Transferencia",
    path: "about",
    icon: Redo,
    active: false,
  },
];

function PrivateLayout() {
  const [isActive, setIsActive] = useState(menuAsideBar);

  const handleHover = (name: string) => {
    setIsActive((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, active: !item.active }
          : { ...item, active: false }
      )
    );
  };
  return (
    <div className="flex h-screen">
      <aside className="w-56 bg-blue-2 flex flex-col">
        <header className="h-12 p-2 text-xl font-bold border border-t-0 border-l-0 border-r-0 border-blue-6">
          Bank
        </header>

        <div className="flex-1 p-2 overflow-y-auto h-72 space-y-4">
          <span className="text-sm">Home</span>
          <div className="space-y-2">
            {isActive.map((element) =>
              element.active ? (
                <Link
                  to={element.path}
                  key={element.name}
                  className="flex gap-x-3 items-center cursor-pointer bg-blue-6 p-2 duration-300"
                >
                  <element.icon className="size-4" />
                  <span>{element.name}</span>
                </Link>
              ) : (
                <Link
                  to={element.path}
                  key={element.name}
                  onClick={() => handleHover(element.name)}
                  className="flex gap-x-3 items-center cursor-pointer hover:bg-blue-6 p-2 duration-300"
                >
                  <element.icon className="size-4" />
                  <span>{element.name}</span>
                </Link>
              )
            )}
          </div>
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
