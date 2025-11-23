import { useState } from "react";
import { Modal } from "../components/modal";
import { Table } from "../components/table/table";
import { CreateClient } from "./form-create-client";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="space-y-10">
      <div className="flex justify-between gap-x-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="w-64 h-36 border border-blue-3 bg-white rounded shadow p-3 space-y-5"
          >
            <p className="font-bold">Total of agency</p>
            <div>
              <span className="text-4xl">1.222</span>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-4xl font-bold">Clients</span>
          <button
            onClick={() => setIsOpenModal(true)}
            className="bg-blue-11 hover:bg-blue-9 text-white p-6 py-2 rounded-md"
          >
            Create account
          </button>
        </div>
        <Table />
      </div>
      {isOpenModal && (
        <Modal
          className="flex justify-center items-center"
          onClick={() => setIsOpenModal(false)}
        >
          <CreateClient onClick={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}
