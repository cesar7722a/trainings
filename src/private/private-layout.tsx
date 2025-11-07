import { EllipsisVertical, Redo } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router";
import { Modal } from "../components/modal";

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
  const [showModal, setShowModal] = useState(false);
  const handleHover = (name: string) => {
    setIsActive((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, active: !item.active }
          : { ...item, active: false }
      )
    );
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex h-screen">
      <aside className="w-56 bg-blue-2 flex flex-col">
        <header className="h-12 p-2 text-xl font-bold border border-t-0 border-l-0 border-r-0 border-blue-6">
          Bank
        </header>

        <div className="flex-1 p-2 overflow-y-auto h-72 space-y-4">
          <span className="text-sm">Home</span>
          <div className="space-y-1">
            {isActive.map((element) =>
              element.active ? (
                <Link
                  to={element.path}
                  key={element.name}
                  className="flex gap-x-3 items-center cursor-pointer bg-blue-3 p-2 duration-300"
                >
                  <element.icon className="size-4" />
                  <span>{element.name}</span>
                </Link>
              ) : (
                <Link
                  to={element.path}
                  key={element.name}
                  onClick={() => handleHover(element.name)}
                  className="flex gap-x-3 items-center cursor-pointer hover:bg-blue-3 p-2 duration-300"
                >
                  <element.icon className="size-4" />
                  <span>{element.name}</span>
                </Link>
              )
            )}
          </div>
        </div>

        <footer
          onClick={handleModal}
          className="h-16 p-2 border border-b-0 border-l-0 border-r-0 border-blue-6"
        >
          <div className="hover:cursor-default hover:bg-blue-3 p-1 rounded-md focus:border focus:border-gray-6 flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="w-8 h-8 bg-blue-12 rounded-md"></div>
              <div>
                <h1 className="text-sm font-bold">Nome</h1>
                <h2 className="text-xs">nome@gmail.com</h2>
              </div>
            </div>
            <EllipsisVertical className="size-5" />
          </div>
        </footer>
      </aside>
      <main className="flex-1 bg-gray-100 overflow-y-auto">
        <div className="h-12 p-2 text-xl font-bold border border-t-0 border-l-0 border-r-0 border-blue-6">
          hell
        </div>
        <Outlet />
      </main>
      {showModal && (
        <Modal onClick={() => setShowModal(false)}>
          <div>hello!!</div>
        </Modal>
      )}
    </div>
  );
}

export { PrivateLayout };
